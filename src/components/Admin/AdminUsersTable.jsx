import { motion } from "framer-motion";

import Header from "../components/common/Header";
import AdminUsersTable from "../components/users/AdminUsersTable";
import Sidebar from "../components/common/Sidebar";



const AdminUsersPage = () => {
	return (
		
		<div className='flex-1 overflow-auto relative z-10'>
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
				<Sidebar />
			</div>
			<Header title='Admin Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
			
				</motion.div>

				<AdminUsersTable />
				
				{/* USER CHARTS */}
			
			</main>
		</div>
		
	);
};
export default AdminUsersPage;
