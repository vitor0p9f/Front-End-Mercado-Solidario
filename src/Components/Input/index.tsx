import { InputContainer, InputElement, Label } from './styles';

type ComponentProps = {
    labelTitle: string;
};

export const InputComponent = ({ labelTitle, ...props }: ComponentProps) => {
    return (
        <InputContainer {...props}>
            <InputElement
                type="text"
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