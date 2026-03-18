import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import './Success.css';

const Success = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { serviceName, price, orderId, payerName } = location.state || {};

    const handleDownloadReceipt = () => {
        const doc = new jsPDF();
        
        // Add Title
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text('PAYMENT RECEIPT', 105, 20, { align: 'center' });
        
        // Add horizontal line
        doc.setLineWidth(0.5);
        doc.line(20, 25, 190, 25);
        
        // Add receipt details
        doc.setFontSize(12);
        doc.setTextColor(80, 80, 80);
        
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        
        doc.text(`Date: ${date}`, 20, 40);
        doc.text(`Time: ${time}`, 20, 48);
        doc.text(`Order ID: ${orderId}`, 20, 56);
        
        // Add Section Header
        doc.setFontSize(16);
        doc.setTextColor(40, 40, 40);
        doc.text('Customer Information', 20, 75);
        
        doc.setFontSize(12);
        doc.setTextColor(80, 80, 80);
        doc.text(`Name: ${payerName || 'Valued Customer'}`, 20, 85);
        
        // Add Order Summary Table-like structure
        doc.setFontSize(16);
        doc.setTextColor(40, 40, 40);
        doc.text('Order Summary', 20, 105);
        
        // Table Header
        doc.setFillColor(240, 240, 240);
        doc.rect(20, 112, 170, 10, 'F');
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text('Service', 25, 119);
        doc.text('Price', 160, 119);
        
        // Table Content
        doc.setTextColor(80, 80, 80);
        doc.text(serviceName || 'N/A', 25, 130);
        doc.text(`$${price}`, 160, 130);
        
        // Total
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'bold');
        doc.text('Total Amount Paid:', 110, 150);
        doc.text(`$${price}`, 160, 150);
        
        // Footer message
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(120, 120, 120);
        doc.text('Thank you for choosing Brownsofts LLC!', 105, 200, { align: 'center' });
        doc.text('If you have any questions, please contact support@brownsofts.com', 105, 206, { align: 'center' });
        
        // Save the PDF
        doc.save(`receipt-${orderId}.pdf`);
    };

    if (!orderId) {
        return (
            <div className="success-page">
                <div className="container text-center py-5">
                    <h2>No order data found</h2>
                    <button onClick={() => navigate('/')} className="btn-solid mt-4">
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="success-page py-5">
            <div className="container">
                <motion.div 
                    className="success-card text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="success-icon-wrapper">
                        <CheckCircle size={80} color="#4BB543" />
                    </div>
                    
                    <h1 className="mt-4">Payment Successful!</h1>
                    <p className="lead">Thank you {payerName || ''} for your purchase.</p>
                    
                    <div className="order-details mt-5 text-start">
                        <h3>Order Summary</h3>
                        <div className="detail-row">
                            <span>Service:</span>
                            <span>{serviceName}</span>
                        </div>
                        <div className="detail-row">
                            <span>Amount Paid:</span>
                            <span>${price}</span>
                        </div>
                        <div className="detail-row">
                            <span>Order ID:</span>
                            <span className="order-id">{orderId}</span>
                        </div>
                    </div>

                    <div className="success-actions mt-5">
                        <button className="btn-solid" onClick={() => navigate('/')}>
                            Return to Home <ArrowRight size={18} />
                        </button>
                        <button className="btn-outline ml-3" onClick={handleDownloadReceipt}>
                            <Download size={18} /> Download Receipt
                        </button>
                    </div>
                    
                    <p className="support-note mt-4">
                        A confirmation email has been sent to your registered address. 
                        If you have any questions, please contact our support.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Success;
