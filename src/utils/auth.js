// authUtils.js
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return 'Please enter your email.';
    } else if (!emailRegex.test(email)) {
        return 'Please enter a valid email address.';
    }
    return '';
};

export const validatePassword = (password) => {
    if (!password) {
        return 'Please enter your password.';
    } else if (password.length < 6) {
        return 'Password should be at least 6 characters long.';
    }
    return '';
};

export const validateLogin = (email, password) => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
        return { email: emailError, password: passwordError };
    }

    return { email: '', password: '' };
};

export const saveCredentialsToLocalStorage = (credentials) => {
    localStorage.setItem('user', JSON.stringify(credentials));
};


export const validateRegistration = (username, email, password) => {
    const usernameError = !username ? 'Please enter your username.' : '';
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError || usernameError) {
        return { email: emailError, password: passwordError };
    }

   

    return { username: usernameError, email: emailError, password: passwordError };
};