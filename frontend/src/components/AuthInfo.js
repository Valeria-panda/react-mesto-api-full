import React from 'react';

function AuthInfo({ email, signOut }) {
  return (
    <div className='auth-info'>
      <span>{email}</span>
      <a href='/signin' className='header__link' onClick={signOut}>Выйти</a>
    </div>
  );
}

export default AuthInfo;
