import { Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import DealerPage from "./pages/DealerPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashPage from "./pages/AdminDashPage";



function App() {
	return (
		<div>
			<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/admin' element={<AdminDashPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/dealer' element={<DealerPage />} />
				<Route path='/dealer/products' element={<ProductsPage />} />
				<Route path='/dealer/users' element={<UsersPage />} />
				<Route path='/dealer/settings' element={<SettingsPage />} />
			</Routes>
		</div>
		</div>
	);
}
	

export default App;
