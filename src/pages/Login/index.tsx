import { InputComponent } from '../../Components/Input';
import { Button, Container, FieldsContainer, Form, Logo, Title } from './styles';

export function Login() {
  return (
    <Container>
      <Logo src="images/icons/icon-512x512.png" alt="A logo do projeto. Três pares de mãos de pessoas com diferentes etnias, sobre um fundo verde, segurando uma moeda dourada com o símbolo do cifrão." />

      <Form>
        <Title>
          Faça login na nossa plataforma
        </Title>

        <FieldsContainer>
          <InputComponent labelTitle="E-mail" type="email" />

          <InputComponent labelTitle="Senha" type="password" $marginTop={2.5} />
        </FieldsContainer>

        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
