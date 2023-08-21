import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  z-index: 0;
`;

export const InputElement = styled.input`
  display: block;
  padding-top: 4px;
  padding-left: 0;
  width: 100%;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.gray900};
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.black};
  appearance: none;
  outline: none;
  focus:outline-none;
  focus:ring-0;
  focus:border: 2px solid ${({ theme }) => theme.black};
`;

export const Label = styled.label`
  position: absolute;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.black};
  duration: 300;
  transform: translateY(-6px) scale(0.75);
  top: 3px;
  z-index: -10;
  transform-origin: 0;
  &.peer-focus {
    left: 0;
    &::before {
      content: none;
    }
    transform: translateY(-6px) scale(0.75);
  }
  &.peer-placeholder-shown {
    scale: 1;
    transform: translateY(0);
  }
  &.peer-focus.peer-placeholder-shown {
    scale: 0.75;
    transform: translateY(-6px);
  }
`;
