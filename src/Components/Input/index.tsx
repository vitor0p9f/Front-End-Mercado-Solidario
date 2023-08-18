import { HTMLInputTypeAttribute, StyleHTMLAttributes } from "react"
import './styles.css'

type ComponentProps = {
    labelName: string
    inputType: HTMLInputTypeAttribute
    fieldStyle?: StyleHTMLAttributes<HTMLInputElement>
    labelStyle?: React.CSSProperties
    divStyle?: string
    inputRequired?: boolean
}

export const InputComponent = ({ labelName, inputType, divStyle, inputRequired }: ComponentProps) => {
    return (
        <div className={`${divStyle} relative`}>
            <input
                id={labelName}
                type={inputType}
                className="
                    text-gray-800
                    border-0
                    border-b-2
                    w-full
                "
                placeholder=" "
                required={inputRequired}
            />
            <label
                htmlFor={labelName}
                className="absolute left-0 text-lg text-black"
            >{labelName}</label>
        </div>
    )
}