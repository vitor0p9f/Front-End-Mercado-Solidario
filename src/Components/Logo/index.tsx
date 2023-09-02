import { Logo as LogoContainer } from './styles'

type LogoProps = {
    size: number
}

/**
   * @param size - It's measured in rem unit
   */
export const Logo = ({ size }: LogoProps) => {
    return (
        <LogoContainer
            $size={size}
            src="images/icons/icon-512x512.png"
            alt="A logo do projeto. Três pairs de mãos de pessoas com diferentes etnias, sobre um fundo verde, segurando uma moeda dourada com o símbolo do cifrão."
        />
    )
}