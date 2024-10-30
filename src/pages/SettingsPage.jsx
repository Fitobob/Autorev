import Header from "../components/common/Header";
import DangerZone from "../components/settings/DangerZone";
import Profile from "../components/settings/Profile";
import Sidebar from "../components/common/Sidebar";

const SettingsPage = () => {
	return (
		
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
				<Sidebar />
			</div>
			<Header title='Dealer Configuración' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
			
				<DangerZone />
				
			</main>
		</div>
		
	);
};

export default SettingsPage;
