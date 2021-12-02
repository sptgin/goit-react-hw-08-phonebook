import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/slice';
import { useLoginMutation } from '../services/phonebook-api';
import './LoginForm.css';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loginUser] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = data => {
    loginUser(data)
      .unwrap()
      .then(fulfilled => {
        dispatch(setCredentials(fulfilled));
        //alert(`Welcome, ${fulfilled.user.name}`);
      })
      .catch(error => alert('Login or password is invalid!'));

    reset();
  };

  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="login__form-label">
          Email
          <input
            className="login__form-input"
            {...register('email', { required: true })}
            title="email"
            type="email"
          />
          {errors?.name?.type === 'required' && (
            <p>This field is required ...</p>
          )}
        </label>
        <label className="login__form-label">
          Password
          <input
            className="login__form-input"
            {...register('password', { required: true })}
            title="password"
            type="password"
          />
          {errors?.password?.type === 'required' && (
            <p>This field is required ...</p>
          )}
        </label>
        <button className="login__form-button" type="submit">
          Log in
        </button>
      </form>
    </>
  );
}
