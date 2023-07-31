import React from "react";
import Head from "next/head";
import Nav from "@/components/home/nav";

import Footer from "@/components/home/footer";
import Home from "@/components/home/home";
const HomeIndex = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" type="image/x-icon" href="../public/home.ico" />
      </Head>
      <div className="bg-white w-full h-screen">
        <Nav />
        <div className="h-full  ">
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
