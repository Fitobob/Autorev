import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import AdminSidebar from "../components/common/AdminSidebar";


const AdminDashPage = () => {
	return (
		
		<div className='flex-1 overflow-auto relative z-10'>
			<div className='fixed inset-0 z-0'>
			
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<AdminSidebar />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>
			<Header title='Admin Dashboard' />
			
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
			
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='MRR' icon={Zap} value='$0' color='#6366F1' />
					<StatCard name='Automotoras Totales' icon={Users} value='$0' color='#8B5CF6' />
					<StatCard name='Vehículos Totales' icon={ShoppingBag} value='$0' color='#EC4899' />
					
				</motion.div>

				

				{/* CHARTS */}

		
			</main>
		</div>
	
	);
};
export default AdminDashPage;
