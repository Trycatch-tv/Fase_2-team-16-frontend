import React from "react";
import LayoutAuth from "@/layouts/LayoutAuth";
import Head from "next/head";
import LoginForm from "@/components/LoginForm";
import Nav from "@/components/home/nav";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/login.ico" />
      </Head>
      <LayoutAuth title="register">
        <Nav cls="fixed top-0 left-0 right-0 z-10" />
        <div className="min-h-screen flex items-center justify-center">
          <LoginForm />
        </div>
      </LayoutAuth>
    </>
  );
};

export default Login;
