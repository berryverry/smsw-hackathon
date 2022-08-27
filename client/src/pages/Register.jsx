import { useContext } from 'react';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import '../styles/form.scss';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Register = () => {
  const { registerMutation } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
  });

  const onChange = (e) => {
    dispatch(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.password !== state.confirm) {
      alert('Your password is not matching!');
      return;
    }
    const { confirm, ...data } = state;
    registerMutation.mutate(data);
  };

  if (registerMutation.isLoading) return <h1>Wait for a second...</h1>;
  return (
    <>
      {registerMutation.isError && (
        <p>error: {registerMutation.error.message}</p>
      )}
      {registerMutation.isSuccess && <p>Register Success</p>}
      <div className="signup-box">
        <h1>Sign Up</h1>
        <h4>It's free</h4>
        <form>
          <label>First Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={onChange}
            placeholder=""
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={onChange}
            placeholder=""
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={onChange}
            placeholder=""
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={onChange}
            placeholder=""
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={state.confirm}
            onChange={onChange}
            placeholder=""
          />
          <input type="button" value="Submit" onClick={onSubmit} />
        </form>
        <p>
          By clicking the Sign Up button,you agree to our <br />
          <a href="#">Instructions</a>
        </p>
      </div>
      <p className="para-2">
        Already have an account? <Link to="/singin">Login here</Link>
      </p>
    </>
  );
};

export default Register;
