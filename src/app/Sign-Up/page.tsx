'use client'
import { InputComponent } from "@/Components/Input";
import { Logo } from "@/Components/Logo";
import { useForm } from "react-hook-form";
import { Button, Container, FieldsContainer, Form, Group, Title } from "./style";

type SignUpFormInputs = {
    Name: string;
    Email: string
    Address: {
        City: string
        Complement: string
        Street: string
        Number: string
        UF: string
        Neighborhood: string
    }
    Password: string
    ConfirmPassword: string
}

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<SignUpFormInputs>({ mode: "onChange" });

    return (
        <Container>
            <Logo size={7} />

            <Form>
                <Title>Forneça as informações para seu cadastro na plataforma</Title>
                <FieldsContainer>
                    <InputComponent labelTitle="Nome" type="text" RHFLabel="Name" errorMessage={errors.Name?.message} register={register} registerOptions={{}} />

                    <InputComponent labelTitle="E-mail" type="email" RHFLabel="E-mail" errorMessage={errors.Email?.message} register={register} registerOptions={{}} $marginTop={2} />

                    <Group itemsQuantity={2}>
                        <InputComponent labelTitle="Cidade" type="text" RHFLabel="City" errorMessage={errors.Address?.City?.message} register={register} registerOptions={{}} />

                        <InputComponent labelTitle="Complemento" type="text" RHFLabel="Complement" errorMessage={errors.Address?.Complement?.message} register={register} registerOptions={{}} />
                    </Group>

                    <InputComponent labelTitle="Rua" type="text" RHFLabel="Street" errorMessage={errors.Address?.Street?.message} register={register} registerOptions={{}} $marginTop={2} />

                    <Group itemsQuantity={3}>
                        <InputComponent labelTitle="Bairro" type="text" RHFLabel="Neighborhood" errorMessage={errors.Address?.Neighborhood?.message} register={register} registerOptions={{}} />

                        <InputComponent labelTitle="Número" type="text" RHFLabel="Number" errorMessage={errors.Address?.Number?.message} register={register} registerOptions={{}} />

                        <InputComponent labelTitle="UF" type="text" RHFLabel="UF" errorMessage={errors.Address?.UF?.message} register={register} registerOptions={{}} />
                    </Group>

                    <InputComponent labelTitle="Senha" type="password" RHFLabel="Password" errorMessage={errors.Password?.message} register={register} registerOptions={{}} $marginTop={2} />

                    <InputComponent labelTitle="Confirmar senha" type="password" RHFLabel="Confirm-Password" errorMessage={errors.ConfirmPassword?.message} register={register} registerOptions={{}} $marginTop={2} />
                </FieldsContainer>

                <Button>Cadastrar</Button>
            </Form>
        </Container>
    )
}