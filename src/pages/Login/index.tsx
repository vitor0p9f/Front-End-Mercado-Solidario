import React from 'react';
import {InputComponent} from '../../Components/Input';
import { Container, Logo, Form, Title, FieldsContainer, Button } from './styles';

export function Login() {
  return (
    <Container>
      <Logo src="images/icons/icon-512x512.png" alt="A logo do projeto. Três pares de mãos de pessoas com diferentes etnias, sobre um fundo verde, segurando uma moeda dourada com o símbolo do cifrão." />

      <Form>
        <Title>Faça login na nossa plataforma</Title>

        <FieldsContainer>
          <InputComponent labelTitle="E-mail" />

          <InputComponent labelTitle="Senha" />
        </FieldsContainer>

        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
