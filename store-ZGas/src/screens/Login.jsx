import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgProfile from '../images/user.png'

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login:', formData);

    if (formData.username === 'a' && formData.password === 'a') {
      navigate('/home');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <div className='box-login'>
      <img src={ImgProfile}/>
      <form onSubmit={handleSubmit} className='form'>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            placeholder='Usuário'
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder='Senha'
          />
        </div>
        <button type="submit" className='button-submit'>Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
