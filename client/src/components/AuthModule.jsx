import { useState } from 'react';

export default function AuthModule({
  initialMode = 'login',
  onLoginSuccess
}) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      alert(`Logging in with: ${formData.email}`);

      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      alert(`New Student Registered: ${formData.name}`);

      setIsLogin(true);

      setFormData({
        name: '',
        email: formData.email,
        password: ''
      });

      window.location.hash = 'login';
    }
  };

  const handleLoginTab = () => {
    setIsLogin(true);
    window.location.hash = 'login';
  };

  const handleRegisterTab = () => {
    setIsLogin(false);
    window.location.hash = 'register';
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* HEADER */}
        <div className="auth-header">
          <h1>RV UNIVERSITY</h1>
          <p>Excellence in Education</p>
        </div>

        {/* TITLE */}
        <h2 className="auth-title">
          {isLogin ? 'Student Login' : 'Student Registration'}
        </h2>

        {/* LOGIN / REGISTER TABS */}
        <div className="auth-tabs">

          <button
            type="button"
            className={isLogin ? 'auth-tab active' : 'auth-tab'}
            onClick={handleLoginTab}
          >
            Login
          </button>

          <button
            type="button"
            className={!isLogin ? 'auth-tab active' : 'auth-tab'}
            onClick={handleRegisterTab}
          >
            Register
          </button>

        </div>

        {/* FORM */}
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="RVU Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="auth-submit"
          >
            {isLogin
              ? 'Sign In to Portal'
              : 'Create Student Account'}
          </button>

        </form>

      </div>

    </div>
  );
}