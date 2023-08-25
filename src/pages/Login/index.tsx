"use client";
import {
  Button,
  Container,
  FieldsContainer,
  Form,
  Logo,
  Title,
} from "@/styles/pages/Login";
import { RegisterOptions, useForm } from "react-hook-form";
import { InputComponent } from "../../Components/Input";

export type SignInFormInputs = {
  Email: string;
  Password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormInputs>({ mode: "onChange" });

  const defaultRegisterOptions: RegisterOptions = {
    required: {
      value: true,
      message: "Por favor preencha este campo.",
    },
  };

  return (
    <Container>
      <Logo
        src="images/icons/icon-512x512.png"
        alt="A logo do projeto. Três pairs de mãos de pessoas com diferentes etnias, sobre um fundo verde, segurando uma moeda dourada com o símbolo do cifrão."
      />

      <Form onSubmit={handleSubmit(() => console.log(isValid))}>
        <Title>Faça login na nossa plataforma</Title>

        <FieldsContainer>
          <InputComponent
            labelTitle="E-mail"
            type="email"
            RHFLabel="Email"
            register={register}
            registerOptions={{
              required: {
                value: true,
                message: "Por favor preencha este campo.",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Este endereço de e-mail é inválido!",
              },
            }}
            errorMessage={errors.Email?.message}
            inputTestId="E-mail-input"
            labelTestId="E-mail-label"
          />

          <InputComponent
            labelTitle="Senha"
            type="password"
            $marginTop={2.5}
            RHFLabel="Password"
            register={register}
            registerOptions={defaultRegisterOptions}
            errorMessage={errors.Password?.message}
          />
        </FieldsContainer>

        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
