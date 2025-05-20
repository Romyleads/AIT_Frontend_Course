const form = document.getElementById('login-form');
const errElement = document.getElementById('login-form-err');

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
			throw new Error('Ошибка входа');
		}

		const { access_token } = await res.json();
		localStorage.setItem('access_token', access_token);

		// ✅ Сохраняем токен в куки (по желанию)
		const date = new Date();
		date.setDate(date.getDate() + 1);
		document.cookie = `access_token=${access_token};expires=${date.toUTCString()};`;

		// ✅ Загружаем профиль и сохраняем
		const profileRes = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});

		if (!profileRes.ok) {
			throw new Error('Ошибка при получении профиля');
		}

		const profile = await profileRes.json();
		localStorage.setItem('userProfile', JSON.stringify(profile));

		console.log("✅ Профиль сохранён:", profile);
		errElement.innerText = '';

		// ✅ Переход на страницу профиля
		window.location.replace('../profile/index.html');

	} catch (err) {
		errElement.innerText = err.message;
		console.error(err);
	}
}

function loginHandler(e) {
	e.preventDefault();
	fetchLogin();
}

form.addEventListener('submit', loginHandler);