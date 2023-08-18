import { ralewayBold, ralewaySemiBold } from "@/Assets/Fonts";
import { InputComponent } from "@/Components/Input";

export default function Home() {
  return (
    <div className="
      flex
      flex-col
      items-center 
      justify-center 
      w-screen 
      h-screen 
      bg-white"
      data-element-name="Sign-in page container"
    >
      <img src="images/Logo.png" className="w-[7rem]" alt="A logo do projeto. Três pares de mãos de pessoas com diferentes etnias, sobre um fundo verde, segurando uma moeda dourada com o símbolo do cifrão." />

      <form action="#"
        className="
        flex
        flex-col 
        items-center 
        justify-center
        mt-16
        w-[24.875rem]
        "
      >
        <h2 className={`${ralewayBold.className} text-black 
        text-2xl `}
        >
          Faça login na nossa plataforma
        </h2>

        <div data-element-name="Fields container"
          className="mt-10 w-full">
          <InputComponent labelName="E-mail" inputType="email" />

          <InputComponent labelName="Senha" divStyle="mt-10" inputType="password" />
        </div>

        <button className={`
          ${ralewaySemiBold.className}
          py-2 
          text-black 
          mt-10 
          w-[14.313rem] 
          bg-HighLight
          rounded-md
          text-xl
          hover:bg-Hover
        `}
        >
          Entrar
        </button>
      </form>
    </div >
  )
}
