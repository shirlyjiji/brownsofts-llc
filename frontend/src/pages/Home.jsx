import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HomeServices from '../components/HomeServices';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();

    return (
        <PageWrapper>

            {/* Featured Services Component */}
            <HomeServices />



            {/* Testimonials Section */}
            <Testimonials />


            {/* Newsletter Section */}
            <Newsletter />

            <Footer />
        </PageWrapper>
    );
};

export default Home;
