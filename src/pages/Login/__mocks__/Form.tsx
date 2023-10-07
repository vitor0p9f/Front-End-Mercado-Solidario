import { InputComponent } from "@/Components/Input"
import { Button, FieldsContainer, Form, Title } from "@/styles/pages/Login"
import React from "react"
import { RegisterOptions, useForm } from "react-hook-form"
import { SignInFormInputs } from ".."

type ComponentProps = {
    loginFunction: jest.Mock<Promise<string>, [email: string, password: string], any>
}

export const FormMock: React.FC<ComponentProps> = ({ loginFunction }) => {
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

    const onSubmit = (data: SignInFormInputs) => {
        loginFunction(data.Email, data.Password)
    }

    return (
        <Form onSubmit={handleSubmit((data) => isValid && onSubmit(data))}>
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
    )
}