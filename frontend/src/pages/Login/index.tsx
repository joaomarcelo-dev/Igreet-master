import { useState } from 'react';
import loginServer from '../../server/login.server';
import './style.scss';
import { useDispatch } from 'react-redux';
import appActions from '../../redux/actions/app.actions';
import { useNavigate } from 'react-router-dom';
import localStorageUtils from '../../utils/localStorage.utils';


export default function Login() {
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await loginServer.loginAdm({ name: formData.name, password: formData.password}).catch((error) => {
      if (error.response?.status === 401) {
        setError('Usuário ou senha inválidos');
      }
    });
    


    if (response?.data.token) {
      dispatch(appActions.setToken(response.data.token))
      localStorageUtils.token.set(response.data.token);
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
          <input
            type="text"
            placeholder="Nome de Usuário"
            className="login-form-form-input"
            name='name'
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="login-form-form-input"
            name='password'
            onChange={handleChange}
          />

          <p
            className="login-form-form-text-error"
          >
            {error || <br />}
          </p>
          
          <button
            type="submit"
            className="login-form-form-button"
            disabled={!formData.name || formData.password.length < 8}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
