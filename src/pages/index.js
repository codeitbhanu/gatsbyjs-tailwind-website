import * as React from "react";
import Header from "./header";
import Hero from "./hero";
import Feature from "./feature";
import Footer from "./footer";

// markup
const IndexPage = () => {
  return (
    <div className="w-screen h-screen bg-red-400">
      <Header />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
};

export default IndexPage;
