import styled from 'styled-components';

type FaircardProps = {
  $marginTop: number;
}
export const Faircard = styled.div<FaircardProps>`
  display: flex;
  align-items: center;
  height: 85px;
  width: 100%;
  background-color: #F5F5F5;
  border-radius: 0.25rem;
  margin-top: ${({ $marginTop }) => $marginTop || 0}rem; 
`;

export const Image = styled.img`
  width: 7rem;
  height: auto; 
  margin-right: 15px; 
  padding-left: 10px;
`;

export const TextContainer = styled.div`
  display: flex; 
  flex-direction: column; 
`;

export const Title = styled.h2`
  font-size: 12px;
  color: #000000;
  margin-top: 0;
  text-align: left;
`;

export const Body = styled.h3`
  font-size: 11px;
  color: #000000;
  margin-top: 0.5rem;
  font-weight: 100; 
`;

export const BoldText = styled.span`
  font-weight: 800; 
`;
