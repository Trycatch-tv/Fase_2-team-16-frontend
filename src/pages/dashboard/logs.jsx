import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import Head from "next/head";
import CardLogs from "@/components/dashboard/CardLogs";
const LogsDashboard = () => {
  return (
    <>
      <Head>
        <title>Logs Dashboard</title>
        <meta name="description" content="Logs Dashboard" />
        <link rel="icon" href="/images/log.svg" />
      </Head>
      <DashboardLayout>
        <CardLogs />
      </DashboardLayout>
    </>
  );
};

export default LogsDashboard;
