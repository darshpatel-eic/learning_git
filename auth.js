function authenticate(login, password) {
	if(login === 'login' && password === 'password') {
	  return 'You are loggen in';
	}else {
	return 'Login is not correct';
	}
}
