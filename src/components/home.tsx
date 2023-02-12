/* eslint-disable react/jsx-props-no-spreading */
// index.tsx
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import styles from './Home.module.css';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
 

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

const Home: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log('data submitted: ', data);

  console.log(watch('email'));
  console.log('errors are', errors);

  return (
    <div className={styles.container}>        
      <main className={styles.main}>
    
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue="example@dev.com"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
          <br />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password?.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
          <input type="submit" />
        </form>
      </main>

    </div>
  );
};

export default Home;