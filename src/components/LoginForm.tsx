import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from  '@mui/material';

type FormData = {
  username: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="username"
        label="Username"        
        error={Boolean(errors.username)}
        helperText={errors.username && 'Username is required'}
      />
      <TextField
        name="password"
        label="Password"
        type="password"        
        error={Boolean(errors.password)}
        helperText={errors.password && 'Password is required'}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
