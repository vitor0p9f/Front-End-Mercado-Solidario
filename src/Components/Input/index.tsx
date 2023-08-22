import { HTMLInputTypeAttribute } from "react";
import { InputContainer, InputElement, Label, Span } from './styles';

type ComponentProps = {
    labelTitle: string;
    $marginTop?: number;
    type: HTMLInputTypeAttribute
    errorMessage: string | undefined
};

export const InputComponent = ({ labelTitle, $marginTop, type, errorMessage }: ComponentProps) => {
    return (
        <>
            <InputContainer $marginTop={$marginTop}>
                <InputElement
                    type={type}
                    id="floating_standard"
                    placeholder=""
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
};
