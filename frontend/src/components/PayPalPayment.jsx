import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const PayPalPayment = ({ amount, serviceName }) => {
    const navigate = useNavigate();

    const createOrder = async (data, actions) => {
        try {
            const response = await axios.post('http://localhost:5000/api/paypal/create-order', {
                amount: amount,
                gigId: serviceName
            });
            return response.data.id;
        } catch (error) {
            console.error('PayPal Create Order Error:', error);
            throw error;
        }
    };

    const onApprove = async (data, actions) => {
        try {
            const response = await axios.post('http://localhost:5000/api/paypal/capture-order', {
                orderId: data.orderID
            });
            
            navigate("/success", {
                state: {
                    serviceName,
                    price: amount,
                    orderId: response.data.id,
                },
            });
        } catch (error) {
            console.error('PayPal Capture Order Error:', error);
            alert('Payment capture failed. Please contact support.');
        }
    };

    return (
        <div className="paypal-button-container" style={{ marginTop: '20px' }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </div>
    );
};

export default PayPalPayment;