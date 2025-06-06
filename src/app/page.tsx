import React from 'react';
import Homepage from './components/Homepage';
import GREPlatform from './components/GREPlatform';4
import ProvenPrepSection from './components/ProvenPrepSection';
import CourseOfferings from './components/CourseOfferings';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
export default function Home() {
  return (
    <div>
      <Homepage/>
      <GREPlatform/>
      <ProvenPrepSection/>
      <CourseOfferings/>
      <Instructor/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
