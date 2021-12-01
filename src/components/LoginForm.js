import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/slice';
import { useLoginMutation } from '../services/phonebook-api';

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
        alert(`Welcome, ${fulfilled.user.name}`);
      })
      .catch(error => alert('Login or password is invalid!'));

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            {...register('email', { required: true })}
            title="email"
            type="email"
          />
          {errors?.name?.type === 'required' && (
            <p>This field is required ...</p>
          )}
        </label>
        <label>
          Password
          <input
            {...register('password', { required: true })}
            title="password"
            type="password"
          />
          {errors?.password?.type === 'required' && (
            <p>This field is required ...</p>
          )}
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
