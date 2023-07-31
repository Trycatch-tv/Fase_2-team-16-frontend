import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const index = () => {
	const router = useRouter();
	useEffect(() => {
		//redirect to /login
		router.push('/home/index');
	}, [router]);
	return null;
};

export default index;
