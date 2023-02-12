import React from 'react';
import { TextField, Button } from  '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
    username: yup.string().required().min(3),
    password: yup.string().min(2).required(),
})

const LoginForm: React.FC = () => {
  const { register, control,
     handleSubmit,  watch, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
     });
  const onSubmit1 = (data: FormData) => {
    console.log(data);
  };
 
  const onSubmit: SubmitHandler<FormData> = (data) =>{

  console.log('data submitted: ', data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="username"
        control = {control}
        defaultValue=""
        render={({ field }) => (
      <TextField
        {...field}
        label="Username"        
        error={!!errors.username}
        helperText={errors.username ? errors.username?.message : ''}
      />
  )}
/>

    <Controller name="password"
    control={control}
    defaultValue=""
    render={({ field }) =>(
      <TextField
        {...field}
        label="Password"
        type="password"        
        error={!!errors.password}
        helperText={errors.password ? errors.password?.message : ''}
      />
    )}
    />


      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
