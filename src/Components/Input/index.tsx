import { HTMLProps } from "react"

type ComponentProps = HTMLProps<HTMLDivElement> & {
    labelTitle: string
}

export const InputComponent = ({ labelTitle, ...props }: ComponentProps) => {
    return (
        <div {...props} className={`relative z-0 ${props.className}`}>
            <input type="text"
                id="floating_standard"
                className="block 
              pt-4
              px-0
              w-full 
              text-sm 
              text-gray-900 
              bg-transparent 
              border-0 
              border-b-2 
              border-black 
              appearance-none
              focus:outline-none
              focus:ring-0
              focus:border-black 
              peer"
                placeholder=""
            />
            <label htmlFor="floating_standard"
                className="absolute 
              text-lg 
              text-black  
              duration-300 
              transform 
              -translate-y-6 
              scale-75 
              top-3 
              -z-10 
              origin-[0] 
              peer-focus:left-0   
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 
              peer-focus:-translate-y-6
              peer-focus:text-black"
            >
                {labelTitle}
            </label>
        </div>
    )
}