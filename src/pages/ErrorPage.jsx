import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
	const location = useLocation();

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
			<div className='max-w-md w-full p-8 bg-white shadow-lg rounded-lg'>
				<h1 className='text-3xl font-semibold text-center text-gray-800 mb-4'>
					Oops!
				</h1>
				<p className='text-center text-gray-600 mb-4'>
					Sorry, the page at{" "}
					<span className='font-semibold'>{location.pathname}</span> was not found.
				</p>
				<p className='text-center'>
					<Link to='/' className='text-blue-500 hover:underline font-semibold'>
						Go back to the homepage
					</Link>
				</p>
			</div>
		</div>
	);
};

export default ErrorPage;
