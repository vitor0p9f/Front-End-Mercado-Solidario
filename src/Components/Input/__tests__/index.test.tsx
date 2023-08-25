import Login from "@/pages/Login"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import { cleanup, render, screen, waitFor } from 'test-utils'

afterEach(() => cleanup())

describe('Componente de input', () => {
    describe('Quando o input recebe foco', () => {
        test('Recebe o foco', async () => {
            render(<Login />)

            await userEvent.click(screen.getByTestId('E-mail-input'))

            expect(screen.getByTestId('E-mail-input')).toHaveFocus()
        })

        // test('A border-bottom muda de cor', async () => {
        //     render(<Login />)

        //     const inputElement = await screen.findByTestId('E-mail-input')

        //     await userEvent.click(inputElement)

        //     await waitFor(() => {
        //         expect(inputElement).toHaveStyleRule('border-bottom', '2px')
        //     })
        // })

        // test('A label deve mudar de cor', async () => {
        //     render(<Login />)

        //     await userEvent.click(screen.getByTestId('E-mail-input'))

        //     expect(screen.getByTestId('E-mail')).toHaveStyle({ color: '#FFFFF' })
        // })
    })
})