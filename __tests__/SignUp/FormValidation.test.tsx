import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import { render, screen } from 'test-utils'
import SignUp from '../../src/app/Sign-Up/page'

beforeEach(async () => {
  render(<SignUp />)
})

describe("Formulário da tela de cadastro", () => {
  test('O campo Nome não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Name-input')).toHaveFocus()
    expect(screen.getByTestId('Name-span')).toBeInTheDocument()
    expect(screen.getByTestId('Name-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo E-mail não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('E-mail-input')).toHaveFocus()
    expect(screen.getByTestId('E-mail-span')).toBeInTheDocument()
    expect(screen.getByTestId('E-mail-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo Cidade não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('City-input')).toHaveFocus()
    expect(screen.getByTestId('City-span')).toBeInTheDocument()
    expect(screen.getByTestId('City-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo Complemento não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Complement-input')).toHaveFocus()
    expect(screen.getByTestId('Complement-span')).toBeInTheDocument()
    expect(screen.getByTestId('Complement-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo Rua não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Street-input')).toHaveFocus()
    expect(screen.getByTestId('Street-span')).toBeInTheDocument()
    expect(screen.getByTestId('Street-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo Bairro não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Neighborhood-input')).toHaveFocus()
    expect(screen.getByTestId('Neighborhood-span')).toBeInTheDocument()
    expect(screen.getByTestId('Neighborhood-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo Número não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Home-number-input')).toHaveFocus()
    expect(screen.getByTestId('Home-number-span')).toBeInTheDocument()
    expect(screen.getByTestId('Home-number-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo UF não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('UF-input')).toHaveFocus()
    expect(screen.getByTestId('UF-span')).toBeInTheDocument()
    expect(screen.getByTestId('UF-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo Senha não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Password-input')).toHaveFocus()
    expect(screen.getByTestId('Password-span')).toBeInTheDocument()
    expect(screen.getByTestId('Password-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo Confirmar Senha não está preenchido', async () => {
    //Preenchendo os demais campos
    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Confirm-password-input')).toHaveFocus()
    expect(screen.getByTestId('Confirm-password-span')).toBeInTheDocument()
    expect(screen.getByTestId('Confirm-password-span')).toHaveTextContent('Por favor preencha este campo.')
  })

  test('O campo "Numero da casa" recebe letras ou números negativos', async () => {

    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90c')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Home-number-input')).toHaveFocus()
    expect(screen.getByTestId('Home-number-span')).toBeInTheDocument()
    expect(screen.getByTestId('Home-number-span')).toHaveTextContent('Digite apenas números.')


    await userEvent.type(screen.getByTestId('Home-number-input'), '-90')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Home-number-input')).toHaveFocus()
    expect(screen.getByTestId('Home-number-span')).toBeInTheDocument()
    expect(screen.getByTestId('Home-number-span')).toHaveTextContent('Digite apenas números.')
  })

  test('O campo UF está com uma sigla inválida', async () => {

    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SPG')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('UF-input')).toHaveFocus()

    expect(screen.getByTestId('UF-span')).toBeInTheDocument()
    expect(screen.getByTestId('UF-span')).toHaveTextContent('A sigla é inválida.')
  })

  test('O campo Senha tem menos de 12 caracteres', async () => {

    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Password-input')).toHaveFocus()
    expect(screen.getByTestId('Password-span')).toBeInTheDocument()
    expect(screen.getByTestId('Password-span')).toHaveTextContent('A senha deve ter no mínimo 12 caracteres!')
  })

  test('O campo "Senha" e o campo "Confirmar Senha" nao correspondem', async () => {

    await userEvent.type(screen.getByTestId('Name-input'), 'Nome genérico')
    await userEvent.type(screen.getByTestId('E-mail-input'), 'generico@email.com')
    await userEvent.type(screen.getByTestId('City-input'), 'Cidade genérica')
    await userEvent.type(screen.getByTestId('Complement-input'), 'Complemento genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Neighborhood-input'), 'Bairro genérico')
    await userEvent.type(screen.getByTestId('Street-input'), 'Rua genérica')
    await userEvent.type(screen.getByTestId('Home-number-input'), '90')
    await userEvent.type(screen.getByTestId('UF-input'), 'SP')
    await userEvent.type(screen.getByTestId('Password-input'), 'senha_generica')
    await userEvent.type(screen.getByTestId('Confirm-password-input'), 'senha_generica_dois')

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('Confirm-password-input')).toHaveFocus()
    expect(screen.getByTestId('Confirm-password-span')).toBeInTheDocument()
    expect(screen.getByTestId('Confirm-password-span')).toHaveTextContent('As senhas devem ser iguais!')
  })
})
