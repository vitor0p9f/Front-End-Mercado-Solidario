import { api } from "../axios"

export const authUser = async (email: string, password: string) => {
    try {
        const { status } = await api.post('/token', {
            username: email,
            password,
            grant_type: password
        })

        if (status != 200) {
            return 'Sua requisição está inválida'
        }

        return 'Você se autenticou!'
    } catch (error) {
        return 'Parece que ocorreu um erro'
    }
}