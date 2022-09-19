import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Herosection from './Herosection';
import Quesans from './Quesans';
import Footer from './Footer';
import Features from './Features';
import ConnectIntro from './ConnectIntro';
import Growbuisness from './Growbuisness';
import DomainPage from './DomainPage';
import Companies from './Companies';
import Pricing from './Pricing';
import Navbar from './Navbar';
import Comment from './Comment';



export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div class="bg-white">
      <Herosection />
      <Features />
      <ConnectIntro />
      <DomainPage />
      <Pricing />
      <Growbuisness />
      <Companies />
      <Quesans />
      <Comment />
      <Footer />
      <Navbar />
    </div>
  )
}


