'use client'
import { Button, Container, FieldsContainer, Form, Logo, Title } from '@/styles/pages/Login';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../Components/Input';

type FormInputs = {
  Email: string
  Password: string
}

export default function Login() {
  const { register, handleSubmit, formState: { errors: formErrors } } = useForm<FormInputs>();

  return (
    <Container>
      <Logo src="images/icons/icon-512x512.png" alt="A logo do projeto. Três pairs de mãos de pessoas com diferentes etnias, sobre um fundo verde, segurando uma moeda dourada com o símbolo do cifrão." />

      <Form onSubmit={handleSubmit(() => console.log("Submit"))}>
        <Title>
          Faça login na nossa plataforma
        </Title>

        <FieldsContainer>
          <InputComponent
            labelTitle="E-mail"
            type="email"
            {...register('Email', {
              required: 'Por favor preencha este campo.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'O formato de e-mail digitado é inválido!'
              }
            }
            )}
            errorMessage={formErrors.Email?.message}
          />

          <InputComponent
            labelTitle="Senha"
            type="password"
            $marginTop={2.5}
            {...register('Password', {
              required: 'Por favor preencha este campo.'
            })}
            errorMessage={formErrors.Password?.message}
          />
        </FieldsContainer>

        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}