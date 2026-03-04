import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HomeServices from '../components/HomeServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import HomeBlog from '../components/HomeBlog';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <PageWrapper>
            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Featured Services Component */}
            <HomeServices />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Newsletter Section */}
            <Newsletter />

            {/* Latest Blog Section component */}
            <HomeBlog />

            <Footer />
        </PageWrapper>
    );
};

export default Home;
