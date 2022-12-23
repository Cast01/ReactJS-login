import { FormEvent, useState } from 'react'
import './App.css'
import { Login } from './Login';

function App() {
	const [userNameInput, setUserNameInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const [loginError, setLoginError] = useState('');

	const [loading, setLoading] = useState(false);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		setLoading(true);
		setLoginError('');

		const loginData = {
			username: userNameInput,
			password: passwordInput,
		}

		Login(loginData)
		.then((response: any) => window.alert(response.message))
		.catch(error => setLoginError(error.message))
		.finally(() => setLoading(false));
	}

	return (
		<div id="Page">
			<form 
				className="App" 
				onSubmit={handleSubmit}
			>
				<h1>Login Form ReactJS</h1>
				{
					loginError && (
						<span>{loginError}</span>
					)
				}
				<input
					type="text"
					placeholder='username'
					value={userNameInput}
					onChange={e => setUserNameInput(e.target.value)}
				/>
				<input
					type="password"
					placeholder='senha'
					value={passwordInput}
					onChange={e => setPasswordInput(e.target.value)}
				/>
				<button 
					type="submit"
					disabled={userNameInput === '' || passwordInput.length < 6 || loading ? true : false}
				>
					ENVIAR
				</button>
			</form>
		</div>
	)
}

export default App
