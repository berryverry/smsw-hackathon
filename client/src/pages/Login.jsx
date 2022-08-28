import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import '../styles/form.scss';

const LoginPage = () => {
  const { loginMutation } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  if (loginMutation.isLoading) return <h1>Wait for a second...</h1>;

  return (
    <>
      {loginMutation.isError && <p>error: {loginMutation.error.message}</p>}
      {loginMutation.isSuccess && <p>Login Success</p>}
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="button" value="Submit" onClick={onSubmit} />
        </form>
      </div>
      <p className="para-2">
        Not have an account? <Link to="/signup">Sign Up Here</Link>
      </p>
    </>
  );
};

export default LoginPage;
