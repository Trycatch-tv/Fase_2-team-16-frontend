import React from "react";
import LayoutAuth from "@/layouts/LayoutAuth";
import Head from "next/head";
import RegisterForm from "@/components/RegisterForm";
import Nav from "@/components/home/nav";
const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/login.ico" />
      </Head>

      <LayoutAuth>
        <Nav cls="fixed top-0 left-0 right-0 z-10" />
        <div className="min-h-screen flex items-center justify-center">
          <RegisterForm />
        </div>
      </LayoutAuth>
    </>
  );
};

export default Register;
