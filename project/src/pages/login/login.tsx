import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/types';
import { loginAction } from '../../store/api-actions';

export function Login(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthData>({
    criteriaMode: 'all'
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    dispatch(loginAction(data));
    navigate(AppRoute.Root);
  };

  return (
    <div className="user-page">
      <Header/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                {...register('email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i })}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                {...register('password',
                  {
                    required: 'This input is required.',
                    pattern: {
                      value: /(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z]{2,}/i,
                      message: 'Пароль должен содержать, как минимум, 1 цифру и 1 букву'
                    },

                  })
                }
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) => messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                  : null}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}
