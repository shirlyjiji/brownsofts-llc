import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import './Checkout.css';
import StripePayment from './StripePayment';
import PayPalPayment from './PayPalPayment';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51P...');

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const gig = location.state?.gig;
    const [paymentMethod, setPaymentMethod] = useState('stripe');

    if (!gig) {
        return (
            <div className="checkout-page">
                <div className="container text-center py-5">
                    <h2>No gig selected</h2>
                    <button onClick={() => navigate('/services')} className="btn-solid mt-4">Back to Services</button>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <h2 className="mb-4">Complete Your Purchase</h2>
                
                <div className="checkout-container">
                    <div className="payment-methods">
                        <div className="payment-method-tabs">
                            <button 
                                className={`tab-btn ${paymentMethod === 'stripe' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('stripe')}
                            >
                                Credit Card (Stripe)
                            </button>
                            <button 
                                className={`tab-btn ${paymentMethod === 'paypal' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('paypal')}
                            >
                                PayPal
                            </button>
                        </div>

                        <div className="payment-form-container">
                            {paymentMethod === 'stripe' ? (
                                <Elements stripe={stripePromise}>
                                    <StripePayment 
                                        amount={gig.price} 
                                        serviceName={gig.title} 
                                    />
                                </Elements>
                            ) : (
                                <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "test" }}>
                                    <PayPalPayment 
                                        amount={gig.price.toString()} 
                                        serviceName={gig.title} 
                                    />
                                </PayPalScriptProvider>
                            )}
                        </div>
                    </div>

                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <div className="gig-preview">
                            <img src={gig.image} alt={gig.title} />
                            <div>
                                <h4>{gig.title}</h4>
                                <span className="category">{gig.category}</span>
                            </div>
                        </div>
                        <div className="summary-item">
                            <span>Service Price</span>
                            <span>${gig.price}</span>
                        </div>
                        <div className="summary-item">
                            <span>Platform Fee</span>
                            <span>$0.00</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>${gig.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;