import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Head from 'next/head';
import { useGetUserQuery } from '@/store/slices/apis';
const DashboardLayout = ({ children }) => {
	const { data: userData, isLoading } = useGetUserQuery();
	console.log(userData);
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<link
					rel='icon'
					href='/home.ico'
				/>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta
					name='description'
					content='Dashboard'
				/>
			</Head>

			<div className='flex overflow-x-hidden min-h-screen min-w-[20rem] '>
				<div className='bg-blue-800 '>
					<Sidebar />
				</div>
				<div className='w-full '>
					<Header />
					<div className='lg:p-4 '>{children}</div>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
