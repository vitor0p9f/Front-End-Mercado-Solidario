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
        justify-center mt-16"
      >
        <h2 className="text-black 
        text-2xl"
        >
          Faça login na nossa plataforma
        </h2>

        <div data-element-name="Fields container"
          className="mt-10 w-full">

          <InputComponent labelTitle="E-mail" />

          <InputComponent labelTitle="Senha" className="mt-8" />
        </div>

        <button className="py-2 
          text-black mt-10 w-[14.313rem] 
          bg-HighLight
          rounded-md
          text-xl"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
