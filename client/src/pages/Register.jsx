import '../styles/form.scss';

const Register = () => {
  return (
    <>
      <div className="signup-box">
        <h1>Sign Up</h1>
        <h4>It's free</h4>
        <form>
          <label>First Name</label>
          <input type="text" placeholder="" />
          <label>Last Name</label>
          <input type="text" placeholder="" />
          <label>Email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <label>Confirm Password</label>
          <input type="password" placeholder="" />
          <input type="button" value="Submit" />
        </form>
        <p>
          By clicking the Sign Up button,you agree to our <br />
          <a href="#">Instructions</a>
        </p>
      </div>
      <p className="para-2">
        Already have an account? <a href="#">Login here</a>
      </p>
    </>
  );
};

export default Register;
