import React from "react";
import Head from "next/head";
import Footer from "@/components/home/footer";
import Nav from "@/components/home/nav";
import Team from "@/components/home/team";
const TeamIndex = () => {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team" />
        <link rel="icon" href="/images/home.svg" />
      </Head>
      <div className="w-full h-screen">
        <Nav />
        <div className="h-full">
          <Team />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TeamIndex;
