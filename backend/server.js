const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stripe = require('stripe');
const paypal = require('@paypal/checkout-server-sdk');

dotenv.config();

console.log("--- Backend Configuration ---");
console.log("PORT:", process.env.PORT || 5000);
console.log("Stripe Key Loaded:", process.env.STRIPE_SECRET_KEY ? "YES (Starts with " + process.env.STRIPE_SECRET_KEY.substring(0, 7) + ")" : "NO");
console.log("PayPal ID Loaded:", process.env.PAYPAL_CLIENT_ID ? "YES" : "NO");
console.log("------------------------------");

const app = express();
app.use(cors());
app.use(express.json());

// GLOBAL LOGGER - See every request in the terminal
app.use((req, res, next) => {
    console.log(`>>> ${new Date().toLocaleTimeString()} - ${req.method} ${req.url}`);
    next();
});

// Stripe Setup (using the key from .env)
const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

// PayPal Setup
let environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
);
let paypalClient = new paypal.core.PayPalHttpClient(environment);

// Simple root check
app.get("/", (req, res) => res.send("Stripe and PayPal Backend Server is Running"));

// Stripe: Create Payment Intent
app.post('/api/stripe/create-payment-intent', async (req, res) => {
    console.log("--- STRIPE REQUEST RECEIVED ---");
    console.log("Body:", req.body);
    try {
        const { amount, gigId } = req.body;
        
        if (amount === undefined || amount === null) {
            console.error("Error: Amount is missing");
            return res.status(400).json({ error: "Amount is required" });
        }

        // Convert amount to cents safely
        const numericAmount = typeof amount === 'string' 
            ? parseFloat(amount.replace(/[^0-9.]/g, '')) 
            : amount;
        
        console.log("Numeric Amount:", numericAmount);

        if (isNaN(numericAmount) || numericAmount <= 0) {
            console.error("Error: Invalid numeric amount");
            return res.status(400).json({ error: "Invalid amount format" });
        }

        const cents = Math.round(numericAmount * 100);
        console.log("Cents to send to Stripe:", cents);

        const paymentIntent = await stripeClient.paymentIntents.create({
            amount: cents,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
            metadata: { gigId: gigId?.toString() || 'unknown' }
        });

        console.log("PaymentIntent created successfully:", paymentIntent.id);
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('--- STRIPE API ERROR ---');
        console.error(error); // This will print the full error object in your backend terminal
        res.status(500).json({ 
            error: "Stripe Error", 
            message: error.message,
            stack: error.stack 
        });
    }
});

// PayPal: Create Order
app.post('/api/paypal/create-order', async (req, res) => {
    try {
        const { amount, gigId } = req.body;
        
        if (!amount) {
            return res.status(400).json({ error: "Amount is required" });
        }

        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: amount.toString()
                },
                description: `Gig: ${gigId || 'Service'}`
            }]
        });

        const order = await paypalClient.execute(request);
        res.json({ id: order.result.id });
    } catch (error) {
        console.error('--- PAYPAL ERROR ---', error.message);
        // Extract detailed PayPal error if available
        const errorDetail = error.message;
        res.status(500).json({ 
            error: "PayPal Error", 
            message: errorDetail,
            details: error.statusCode 
        });
    }
});

// PayPal: Capture Order
app.post('/api/paypal/capture-order', async (req, res) => {
    const { orderId } = req.body;
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    try {
        const capture = await paypalClient.execute(request);
        res.json({ id: capture.result.id, status: capture.result.status });
    } catch (error) {
        console.error('PayPal Capture Error:', error);
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
