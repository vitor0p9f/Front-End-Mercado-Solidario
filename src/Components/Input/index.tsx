import { SignInFormInputs } from "@/pages/Login";
import { HTMLInputTypeAttribute } from "react";
import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { InputContainer, InputElement, Label, Span } from './styles';

type ComponentProps = {
    labelTitle: string
    $marginTop?: number
    type: HTMLInputTypeAttribute
    errorMessage: string | undefined
    RHFLabel: Path<SignInFormInputs>;
    register: UseFormRegister<SignInFormInputs>;
    registerOptions: RegisterOptions<SignInFormInputs>;
};

export const InputComponent = ({ RHFLabel, errorMessage, labelTitle, register, registerOptions, type, $marginTop }: ComponentProps) => {
    return (
        <>
            <InputContainer $marginTop={$marginTop}>
                <InputElement
                    type={type}
                    id="floating_standard"
                    placeholder=""
                    {...register(RHFLabel, registerOptions)}
                />
                <Label
                    htmlFor="floating_standard"
                >
                    {labelTitle}
                </Label>
            </InputContainer>
            {errorMessage && <Span>{errorMessage}</Span>}
        </>
    )
}