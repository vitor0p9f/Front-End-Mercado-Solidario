import { ToastOptions, toast } from "react-toastify"
import { api } from "../axios"
import Cookies from "js-cookie"

const toastOptions: ToastOptions = {
    position: "bottom-left",
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    theme: "light"
}

export const authUser = async (email: string, password: string) => {
    try {
        const { status, data } = await api.post('/token', {
            username: email,
            password,
            grant_type: password
        })

        if (status != 200) {
            toast.warning('Verifique o e-mail e senha informados e tente novamente!', toastOptions)

            return
        }

        api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        Cookies.set('Authenticated', "true");
    } catch (error) {
        toast.error('Houve um erro ao tentar processar sua requisição, tente novamente mais tarde!', toastOptions)
    }
}
