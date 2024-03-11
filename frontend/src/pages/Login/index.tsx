import { useState } from 'react';
import loginServer from '../../server/login.server';
import './style.scss';

export default function Login() {
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await loginServer.loginAdm({ name: formData.name, password: formData.password});
    console.log(response);
  }
  return (
    <div
      className='content-login-page flex_center'
    >
      <div className="login-form">
        <h1 className="login-form-title">Login</h1>
        <form action="" className="login-form-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Namo de Usuário" className="login-form-form-input" name='name' onChange={handleChange} />
          <input type="password" placeholder="Password" className="login-form-form-input" name='password' onChange={handleChange} />
          <button type="submit" className="login-form-form-button">Login</button>
        </form>
      </div>
    </div>
  )
}
