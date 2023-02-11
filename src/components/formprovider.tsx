import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { string, object} from 'yup';


import ReactHookFormTextFieldContainer from './RHookFormTextFieldContainer';


interface IFormProps {
  name: string;
  message: string;
}

let formSchema = object({
  name: string().required('Name is required'),
  message: string().required('Message is required'),
});


const FieldArrayForm: FC = () => {

  const methods = useForm<IFormProps>({
    resolver: yupResolver(formSchema),
  });

  const submitRecipe: SubmitHandler<IFormProps> = async (data: IFormProps) => {
    console.log('data submitted', data);
  };

  return (
    <div className="">
      <Grid container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitRecipe)}>
            <Grid item>
              <ReactHookFormTextFieldContainer label="Name" name="name" />
            </Grid>
            <Grid item>
              <ReactHookFormTextFieldContainer label="Message" name="message" />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </div>
  );
};

export default FieldArrayForm;
