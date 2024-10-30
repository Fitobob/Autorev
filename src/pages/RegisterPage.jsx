
import React from "react";
import { FaUser,FaLock } from "react-icons/fa";


function RegisterPage () {
	return (
		<div className='wrapper'>
					<div className="form-box login">
							<form action="">
								<h1>Registro</h1>
								<div className="input-box">
									<input type="text" 
									placeholder='Email' required />
									<FaUser classname='icon' />
								</div>
								<div className="input-box">
									<input type="password" 
									placeholder='Password' required />
									<FaLock classname='icon'/>
									</div>

									<div className="input-box">
									<input type="password" 
									placeholder='Password' required />
									<FaLock classname='icon'/>
									</div>

									<button type="submit">Registrarme</button>

								
							</form>
					</div>
		</div>
		
	)

}



export default RegisterPage;
 