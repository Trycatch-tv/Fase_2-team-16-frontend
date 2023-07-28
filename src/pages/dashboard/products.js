import DashboardLayout from '@/layouts/DashboardLayout';
import Head from 'next/head';
import TableData from '@/components/TableData';

const dashboard = () => {
	return (
		<DashboardLayout>
			<Head>
				<title>Dashboard</title>
				<meta
					name='description'
					content='products'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
		</DashboardLayout>
	);
};

export default dashboard;
