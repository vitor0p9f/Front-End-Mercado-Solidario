import { HTMLInputTypeAttribute } from "react";
import { InputContainer, InputElement, Label } from './styles';

type ComponentProps = {
    labelTitle: string;
    $marginTop?: number;
    type: HTMLInputTypeAttribute
};

export const InputComponent = ({ labelTitle, $marginTop, type }: ComponentProps) => {
    return (
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
    );
};