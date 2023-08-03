import { useLogs } from '@/custom-hooks/Log';
import { capitalizeFirstLetter, formatFecha } from '@/utils/functions';
import PaginationLogs from '../pagination/LogsPagination';
import { LoaderLogs } from '../loaders/Loaders';

const Log = () => {
	const { logsData, isSuccessLogs, isErrorLogs, isLoandingLogs } = useLogs();
	console.log(logsData);
	//   console.log(isErrorLogs);
	//   console.log(isLoandingLogs);

	const dataLogs = logsData.map((log, index) => (
		<div
			className='rounded flex flex-col  bg-gray-100 hover:bg-gray-200 hover:cursor-default border-2 w-full p-8'
			id={log.id}
			key={index}>
			<div className='flex  justify-center items-center flex-col md:flex-row md:items-start'>
				<div
					className={`w-28 h-28 ${
						log.method === 'DELETE'
							? 'bg-red-200 text-red-600'
							: log.method === 'POST'
							? 'bg-orange-200 text-orange-600'
							: log.method === 'PUT'
							? 'bg-blue-200 text-blue-600'
							: log.method === 'GET'
							? 'bg-green-200 text-green-600'
							: ''
					} font-bold rounded-full flex justify-center uppercase items-center text-center mr-5`}>
					{log.method === 'GET'
						? 'Read'
						: log.method === 'POST'
						? 'Create'
						: log.method === 'PUT'
						? 'Update'
						: log.method === 'DELETE'
						? 'Delete'
						: ''}
				</div>
				<div className='pt-4 flex flex-col items-center md:items-start'>
					<p
						className={`${
							log.method === 'DELETE'
								? ' text-red-600'
								: log.method === 'POST'
								? ' text-orange-600'
								: log.method === 'PUT'
								? ' text-blue-600'
								: log.method === 'GET'
								? ' text-green-600'
								: ''
						} font-bold`}>
						{log.url}
					</p>
					<span className='text-gray-500 font-semibold block text-center md:text-left md:max-w-[14rem]  whitespace-normal truncate overflow-hidden break-normal  pt-1'>
						{log.description}
					</span>
				</div>
			</div>
			<div className='flex md:flex-row flex-col justify-center items-center md:justify-between pt-4 font-semibold text-gray-500'>
				<span>
					{formatFecha(log.date)} - {log.hour}
				</span>
				<span>
					{capitalizeFirstLetter(log.user.name)}{' '}
					{capitalizeFirstLetter(log.user.lastname)}
				</span>
			</div>
		</div>
	));

	return (
		<>
			<h2 className='text-gray-500 font-bold text-3xl text-center uppercase '>
				Logs
			</h2>
			{!isSuccessLogs ? (
				<div className='flex justify-center flex-col items-center mt-8 gap-4'>
					<LoaderLogs /> Cargando logs...
				</div>
			) : logsData.length > 0 ? (
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-4'>
					{dataLogs}
				</div>
			) : isSuccessLogs ? (
				<div className='flex justify-center flex-col items-center mt-8 mb-8 gap-4 p-10  w-full  hover:cursor-default'>
					<span className='text-6xl'>⚠️</span>
					<span className='text-yellow-500 font-bold text-md text-center uppercase '>
						No logs found.
					</span>
				</div>
			) : null}
			<div>{logsData.length > 0 ? <PaginationLogs /> : ''}</div>
		</>
	);
};

export default Log;
