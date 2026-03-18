import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { Lock, CreditCard } from "lucide-react";
 
const StripePayment = ({ amount, serviceName }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
 
  const [clientSecret, setClientSecret] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  useEffect(() => {
    // Create PaymentIntent as soon as the component loads
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stripe/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            amount: amount, 
            gigId: serviceName 
          }),
        });
        
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Backend returned non-JSON response:", text);
          setError(`Server Error: The backend returned an invalid response. Check the backend terminal.`);
          return;
        }

        const data = await response.json();
        
        if (!response.ok) {
          setError(`Backend Error: ${data.message || data.error || 'Unknown error'}`);
          return;
        }

        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not connect to the payment server. Ensure the backend is running on port 5000.");
      }
    };
 
    if (amount) {
      createPaymentIntent();
    }
  }, [amount]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!stripe || !elements) {
      return;
    }
 
    setIsProcessing(true);
    setError(null);
 
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name,
          email,
        },
      },
    });
 
    if (result.error) {
      setError(result.error.message);
      setIsProcessing(false);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setIsProcessing(false);
        navigate("/success", {
          state: {
            serviceName,
            price: amount,
            orderId: result.paymentIntent.id,
          },
        });
      }
    }
  };
 
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#1e293b",
        "::placeholder": {
          color: "#94a3b8",
        },
        fontFamily: "inherit",
        fontWeight: "600",
      },
      invalid: {
        color: "#ef4444",
      },
    },
  };
 
  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          required
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Card Details</label>
        <div className="input-with-icon stripe-card-wrapper">
          <CreditCard className="input-icon" size={18} />
          <div className="stripe-element-container">
            <CardElement options={cardElementOptions} />
          </div>
        </div>
      </div>
 
      {error && <div className="payment-error">{error}</div>}
 
      <button type="submit" className="pay-btn" disabled={!stripe || isProcessing || !clientSecret}>
        {isProcessing ? (
          <span className="loader-container">
            <div className="spinner"></div> Processing...
          </span>
        ) : (
          <>Pay {amount} Now</>
        )}
      </button>
 
      <p className="payment-note">
        <Lock size={12} /> Your payment information is encrypted and secure via Stripe.
      </p>
    </form>
  );
};
 
export default StripePayment;