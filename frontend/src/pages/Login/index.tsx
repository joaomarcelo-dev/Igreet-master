import { useState } from 'react';
import loginServer from '../../server/login.server';
import './style.scss';
import { useDispatch } from 'react-redux';
import appActions from '../../redux/actions/app.actions';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await loginServer.loginAdm({ name: formData.name, password: formData.password});

    if (response.token) {
      dispatch(appActions.setToken(response.token))
      navigation('/');
    }
    
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
