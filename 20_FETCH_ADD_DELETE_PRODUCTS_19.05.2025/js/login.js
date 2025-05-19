const form = document.getElementById('login-form');
const errElement = document.getElementById('login-form-err');

// then --> await
// await только внутри функций, который являются всинхронными
// при объявлении укажем слово async

async function fetchLogin() {
	try {
		const credentials = {
			email: form.elements['email'].value,
			password: form.elements['password'].value,
		};
		const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(credentials),
		});
		if (!res.ok) {
			if (res.status === 401) {
				throw new Error('Wrong password or email');
			}
		}

		const obj = await res.json();
		//window.location.href = '../profile/index.html';


const {access_token} = obj; // json web token
console.log(access_token); 

// в браузере есть способы хранения:

// localStorage
// sessionStorage
// cookies

// сохраняем в localStorage под ключом access_token

localStorage.setItem('access_token', access_token);

// Сохраняем в куки
const date = new Date();
date.setDate(date.getDate() + 1);
document.cookie = `access_token=${access_token};expires=${date.toUTCString()};`;






window.location.replace('/profile/');


		console.log(obj);
		errElement.innerText = '';


	} catch (err) {
		errElement.innerText = err.message;
	}
}

function loginHandler(e) {
	e.preventDefault();
	fetchLogin();
}

form.addEventListener('submit', loginHandler);
