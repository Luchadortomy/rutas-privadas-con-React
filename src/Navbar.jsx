import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};
	
	const onDatosClick = () => {
		navigate('/datos', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };
	const onDatospClick = () => {
		navigate('/datosp', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };
	  const onDashboard = () => {
		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };
	  const onDocumentos = () => {
		navigate('/documentos', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Inicio</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						<button className='btn-dt' onClick={onDatosClick}>
							Contactanos
						</button>
						<button className='btn-dt' onClick={onDatospClick}>
							Datos Privados
						</button>
						<button className='btn-logout' onClick={onDashboard}>
							Dashboard
						</button>
						<button className='btn-logout' onClick={onDocumentos}>
							Documentos
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};