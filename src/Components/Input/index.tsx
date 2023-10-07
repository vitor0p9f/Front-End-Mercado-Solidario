import { HTMLInputTypeAttribute } from "react";
import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { InputContainer, InputElement, Label, Span } from "./styles";

type ComponentProps = {
  labelTitle: string;
  $marginTop?: number;
  type: HTMLInputTypeAttribute;
  errorMessage: string | undefined;
  RHFLabel: Path<any>;
  register: UseFormRegister<any>;
  registerOptions: RegisterOptions;
  inputTestId?: string
  labelTestId?: string
  spanTestId?: string
};

export const InputComponent = ({
  RHFLabel,
  errorMessage,
  labelTitle,
  register,
  registerOptions,
  type,
  $marginTop,
  inputTestId,
  labelTestId,
  spanTestId
}: ComponentProps) => {
  return (
    <>
      <InputContainer $marginTop={$marginTop}>
        <InputElement
          type={type}
          id="floating_standard"
          placeholder=""
          {...register(RHFLabel, registerOptions)}
          $hasError={Boolean(errorMessage)}
          data-testid={inputTestId}
        />
        <Label htmlFor="floating_standard" $hasError={Boolean(errorMessage)} data-testid={labelTestId}>
          {labelTitle}
        </Label>
      </InputContainer>
      {errorMessage && <Span data-testid={spanTestId}>{errorMessage}</Span>}
    </>
  );
};
