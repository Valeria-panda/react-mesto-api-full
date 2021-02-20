import React from 'react';
import AuthorizeForm from './AuthorizeForm';

function Login({ onLogin }){

    function submitForm(password, email) {
        onLogin(password, email);
    }

    return(
        <AuthorizeForm
            title='Вход'
            submitButtonText='Войти'
            path='/signup'
            onSubmit={submitForm}
            autoCompleteEmail='email'
            autoCompletePassword='current-password'
            loginText="Eщe не зарегистрированны ?"
            loginLink="Зарегистрироваться"
        />
    )
}

export default Login;
