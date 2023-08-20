import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.white};;
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.black};
  margin-top: 1rem;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme['highlight']};
  border: none;
  border-radius: 0.25rem;
  margin-top: 2rem;
  cursor: pointer;
`;
