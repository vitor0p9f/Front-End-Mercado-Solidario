"use client";
import { Logo } from "@/Components/Logo";
import { PageContainer } from "@/styles/global";
import {
  Button,
  FieldsContainer,
  Form,
  OptionsContainer,
  Text,
  TextContainer,
  Title
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
    <PageContainer>
      <Logo size={7} />

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
            spanTestId="E-mail-span"
          />

          <InputComponent
            labelTitle="Senha"
            type="password"
            $marginTop={2}
            RHFLabel="Password"
            register={register}
            registerOptions={defaultRegisterOptions}
            errorMessage={errors.Password?.message}
            inputTestId="Password-input"
            spanTestId="Password-span"
          />
        </FieldsContainer>

        <Button>Entrar</Button>
      </Form>

      <OptionsContainer $marginTop={2}>
        <TextContainer>
          <Text $marginRight={0.25}>Ainda não possui cadastro?</Text>
          <Text $highlight as="a" href="/Sign-Up">Cadastre-se</Text>
        </TextContainer>
      </OptionsContainer>
    </PageContainer>
  );
}
