import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import { render, screen } from 'test-utils'
import { FormMock } from "../__mocks__/Form"

const mockLogin = jest.fn((email: string, password: string) => {
    Promise.resolve({ email, password })
})

beforeEach(async () => {
    render(<FormMock loginFunction={mockLogin} />)
})

describe('Formulário da tela de login', () => {
    test('Todos os campos estão preenchidos corretamente', async () => {
        await userEvent.type(screen.getByTestId('E-mail-input'), 'teste@gmail.com')
        await userEvent.type(screen.getByTestId('Password-input'), 'Qualquer_coisa')

        await userEvent.click(screen.getByRole('button'))

        screen.queryAllByRole('span').forEach(span => {
            expect(span).not.toBeInTheDocument()
        })
    })

    test('O campo de E-mail não está preenchido', async () => {
        await userEvent.type(screen.getByTestId('Password-input'), 'Qualquer_coisa')

        await userEvent.click(screen.getByRole('button'))

        expect(screen.getByTestId('E-mail-input')).toHaveFocus()
        expect(screen.getByTestId('E-mail-span')).toBeInTheDocument()
        expect(screen.getByTestId('E-mail-span')).toHaveTextContent('Por favor preencha este campo.')
        expect(screen.queryByTestId('Password-span')).not.toBeInTheDocument()
    })

    test('O campo de E-mail está preenchido com um e-mail inválido', async () => {
        await userEvent.type(screen.getByTestId('E-mail-input'), 'teste.123.com')

        expect(screen.getByTestId('E-mail-input')).toHaveFocus()
        expect(screen.getByTestId('E-mail-span')).toBeInTheDocument()
        expect(screen.getByTestId('E-mail-span')).toHaveTextContent('Este endereço de e-mail é inválido!')
    })

    test('O campo Senha não está preenchido', async () => {
        await userEvent.type(screen.getByTestId('E-mail-input'), 'teste@gmail.com')

        await userEvent.click(screen.getByRole('button'))

        expect(screen.getByTestId('Password-input')).toHaveFocus()
        expect(screen.getByTestId('Password-span')).toBeInTheDocument()
        expect(screen.getByTestId('Password-span')).toHaveTextContent('Por favor preencha este campo.')
        expect(screen.queryByTestId('E-mail-span')).not.toBeInTheDocument()
    })

    test('Nenhum dos campos foi preenchido', async () => {
        await userEvent.click(screen.getByRole('button'))

        expect(screen.getByTestId('E-mail-input')).toHaveFocus()
        expect(screen.getByTestId('E-mail-span')).toBeInTheDocument()
        expect(screen.getByTestId('E-mail-span')).toHaveTextContent('Por favor preencha este campo.')
        expect(screen.getByTestId('Password-span')).toBeInTheDocument()
        expect(screen.getByTestId('Password-span')).toHaveTextContent('Por favor preencha este campo.')
    })

    test('Os dados estão sendo enviados do formulário para a função responsável pelo login', async () => {
        await userEvent.type(screen.getByTestId('E-mail-input'), 'teste@gmail.com')
        await userEvent.type(screen.getByTestId('Password-input'), 'Qualquer_coisa')

        await userEvent.click(screen.getByRole('button'))

        screen.queryAllByRole('span').forEach(span => {
            expect(span).not.toBeInTheDocument()
        })

        expect(mockLogin).toBeCalledWith('teste@gmail.com', 'Qualquer_coisa')
    })
})