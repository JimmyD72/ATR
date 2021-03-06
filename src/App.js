import React from 'react';

import {Login} from "./components/Login.js"
import {Button} from "./components/Button";
import Header from './sections/Header';
import Services from './sections/Services';
import Features from './sections/Features';
import WebDesc from './sections/WebDesc';
import Pricing from './sections/Pricing';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import ContactSocial from './sections/ContactSocial';
import Footer from './sections/Footer';

import classes from './App.module.scss';

// function App() {
//
//   function addComponent() {
//
//   }
//
//   return (
//
//       <div>
//
//         <Button onClick={addComponent} text="Call Component"/>
//         <Login text="Login"/>
//
//       </div>
//
//   )
//
//}
const App = () => {
    return (
    <div>
      <Header />
      <Services sectionStyles={classes.section} />
      <Features sectionStyles={classes.section} />
      <WebDesc />
      <Pricing sectionStyles={classes.section} />
      <Testimonial sectionStyles={classes.section} />
      <Contact sectionStyles={classes.section} />
      <ContactSocial />
      <Footer />
    </div>
  );
};



export default App;
