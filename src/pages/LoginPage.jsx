
import React from "react";
import { FaUser,FaLock } from "react-icons/fa";


	const LoginPage = () => {
		return (
			<div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'>
			<div className='max-w-4xl mx-auto py-6 px-4 lg:px-8'/>
						<div className="form-box login">
								<form action="">
									<h1>Login</h1>
									<div className="input-box">
										<input type="text" 
										placeholder='Username' required />
										<FaUser classname='icon' />
									</div>
									<div className="input-box">
										<input type="password" 
										placeholder='Password' required />
										<FaLock classname='icon'/>
										</div>

										<div className="remember-forgot">
											<label><input type="checkbox" />Recordarme</label>
											<a href="#">Forgot Password</a>
										</div>

										<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto' type="submit">Login</button>

										<div className="register-link">
											<p>¿No tienes acceso? <a href='/register'>Registro</a>
											</p>
										</div>

										<div className="register-link">
											<p>Acceso al <a href='/dealer'>Dealer Dashboard</a>
											</p>
										</div>

										<div className="register-link">
											<p>Acceso al <a href='/admin'>Admin Dashboard</a>
											</p>
										</div>

								</form>
						</div>
			</div>
			
		)

}


export default LoginPage;
 