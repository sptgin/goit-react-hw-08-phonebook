import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSignupMutation } from '../services/phonebook-api';
import { setCredentials } from '../redux/slice';

export default function RegisterForm() {
  const [onRegister] = useSignupMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async data => {
    try {
      const userData = await onRegister(data).unwrap();
      dispatch(setCredentials(userData));
      reset();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input
            {...register('name', {
              required: true,
              pattern:
                /^[a-zA-Zа-яА-Я0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Zа-яА-Я0-9]){2,18}[a-zA-Zа-яА-Я0-9]$/,
            })}
            title="Name"
            type="text"
            placeholder="Name"
          />
          {errors?.name?.type === 'required' && (
            <p>This field is required ...</p>
          )}
          {errors?.name?.type === 'pattern' && <p>Characters only</p>}
        </label>
        <label>
          Email
          <input
            {...register('email', { required: true, type: 'email' })}
            title="email"
            type="email"
            placeholder="abc@abc.com"
          />
          {errors?.email?.type === 'required' && (
            <p>This field is required ...</p>
          )}
        </label>
        <label>
          Password
          <input
            {...register('password', { required: true, minLength: 7 })}
            title="Input your password"
            type="password"
            placeholder="password"
          />
          {errors?.password?.type === 'required' && (
            <p>This field is required ...</p>
          )}
          {errors?.password?.type === 'minLength' && (
            <p>Password must contain minimum 7 charts</p>
          )}
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
