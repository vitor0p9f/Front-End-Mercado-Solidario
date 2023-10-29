'use client'
import { InputComponent } from "@/Components/Input";
import { Logo } from "@/Components/Logo";
import { RegisterOptions, useForm } from "react-hook-form";
import { Button, Container, FieldsContainer, Form, Group, Title } from "./style";

type SignUpFormInputs = {
    Name: string;
    Email: string
    City: string
    Complement: string
    Street: string
    Number: string
    UF: string
    Neighborhood: string
    Password: string
    ConfirmPassword: string
}

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch
    } = useForm<SignUpFormInputs>({ mode: "onChange" });

    const defaultRegisterOptions: RegisterOptions = {
        required: {
            value: true,
            message: "Por favor preencha este campo.",
        },
    };

    console.log(errors.City)

    return (
        <Container>
            <Logo size={7} />

            <Form onSubmit={handleSubmit(() => console.log(isValid))}>
                <Title>Forneça as informações para seu cadastro na plataforma</Title>
                <FieldsContainer>
                    <InputComponent labelTitle="Nome" type="text" RHFLabel="Name" errorMessage={errors.Name?.message} register={register} registerOptions={defaultRegisterOptions} />

                    <InputComponent labelTitle="E-mail" type="email" RHFLabel="Email" errorMessage={errors.Email?.message} register={register} registerOptions={{
                        required: {
                            value: true,
                            message: "Por favor preencha este campo.",
                        },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Este endereço de e-mail é inválido!",
                        },
                    }} $marginTop={2} />

                    <Group $itemsQuantity={2}>
                        <InputComponent labelTitle="Cidade" type="text" RHFLabel="City" errorMessage={errors.City?.message} register={register} registerOptions={{
                            required: {
                                value: true,
                                message: "Por favor preencha este campo.",
                            }
                        }} />

                        <InputComponent labelTitle="Complemento" type="text" RHFLabel="Complement" errorMessage={errors.Complement?.message} register={register} registerOptions={defaultRegisterOptions} />
                    </Group>

                    <InputComponent labelTitle="Rua" type="text" RHFLabel="Street" errorMessage={errors.Street?.message} register={register} registerOptions={defaultRegisterOptions} $marginTop={2} />

                    <Group $itemsQuantity={3}>
                        <InputComponent labelTitle="Bairro" type="text" RHFLabel="Neighborhood" errorMessage={errors.Neighborhood?.message} register={register} registerOptions={defaultRegisterOptions} />

                        <InputComponent labelTitle="Número" type="text" RHFLabel="Number" errorMessage={errors.Number?.message} register={register} registerOptions={defaultRegisterOptions} />

                        <InputComponent labelTitle="UF" type="text" RHFLabel="UF" errorMessage={errors.UF?.message} register={register} registerOptions={{
                            ...defaultRegisterOptions,
                            maxLength: {
                                value: 2,
                                message: "A UF deve ter no máximo 2 caracteres"
                            }
                        }} />
                    </Group>

                    <InputComponent labelTitle="Senha" type="password" RHFLabel="Password" errorMessage={errors.Password?.message} register={register} registerOptions={{
                        minLength: {
                            value: 12,
                            message: "A senha deve ter no mínimo 12 caracteres!"
                        }
                    }} $marginTop={2} />

                    <InputComponent labelTitle="Confirmar senha" type="password" RHFLabel="ConfirmPassword" errorMessage={errors.ConfirmPassword?.message} register={register} registerOptions={{
                        validate: (value) => {
                            if (watch('Password') != value) {
                                return "As senhas não são iguais!"
                            }
                        }
                    }} $marginTop={2} />
                </FieldsContainer>

                <Button>Cadastrar</Button>
            </Form>
        </Container>
    )
}
