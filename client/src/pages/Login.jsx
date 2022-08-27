import '../styles/form.scss';

const LoginPage = () => {
  return (
    <>
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <input type="button" value="Submit" />
        </form>
      </div>
      <p className="para-2">
        Not have an account? <a href="#">Sign Up Here</a>
      </p>
    </>
  );
};

export default LoginPage;
