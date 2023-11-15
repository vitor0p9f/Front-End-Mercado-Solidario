import { authUser } from "@/utils/functions/authUser"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import { render, screen } from 'test-utils'
import { FormMock } from "../../__mocks__/Form"
import Cookies from "js-cookie"

const mockLogin = jest.fn(authUser)

beforeEach(async () => {
    render(<FormMock loginFunction={mockLogin} />)
})

describe('Tela de login', () => {
    describe('Validação do formulário', () => {
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
    })

    describe('Autenticação do usuário', () => {
        test('Os dados estão sendo enviados do formulário para a função responsável pelo login', async () => {
            await userEvent.type(screen.getByTestId('E-mail-input'), 'teste@gmail.com')
            await userEvent.type(screen.getByTestId('Password-input'), 'Qualquer_coisa')

            await userEvent.click(screen.getByRole('button'))

            screen.queryAllByRole('span').forEach(span => {
                expect(span).not.toBeInTheDocument()
            })

            expect(mockLogin).toBeCalledWith('teste@gmail.com', 'Qualquer_coisa')
        })

        test('O usuário está sendo autenticado', async () => {
            await userEvent.type(screen.getByTestId('E-mail-input'), 'teste@gmail.com')
            await userEvent.type(screen.getByTestId('Password-input'), 'Qualquer_coisa')

            await userEvent.click(screen.getByRole('button'))

            screen.queryAllByRole('span').forEach(span => {
                expect(span).not.toBeInTheDocument()
            })

            expect(mockLogin).toBeCalledWith('teste@gmail.com', 'Qualquer_coisa')

            await mockLogin('teste@gmail.com', 'Qualquer_coisa')

            const isAuthenticated = Cookies.get('Authenticated');

            expect(isAuthenticated).toBe("true");
        })

        test('Houve um erro durante o processo de autenticação', async () => {
            await userEvent.type(screen.getByTestId('E-mail-input'), 'desconhecido@gmail.com')
            await userEvent.type(screen.getByTestId('Password-input'), 'Qualquer_coisa')

            await userEvent.click(screen.getByRole('button'))

            screen.queryAllByRole('span').forEach(span => {
                expect(span).not.toBeInTheDocument()
            })

            expect(mockLogin).toBeCalledWith('desconhecido@gmail.com', 'Qualquer_coisa')

            Cookies.remove('token')

            await mockLogin('desconhecido@gmail.com', 'Qualquer_coisa')

            const storagedToken = Cookies.get('token')

            expect(storagedToken).toBeUndefined()
        })
    })
})
