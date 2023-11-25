import React from 'react';
import { Faircard, Image, TextContainer, Title, Body, BoldText } from './styles'; // Importe os estilos e componentes necessários
import { MarketplacesCardsContainer } from '@/styles/global';

const feiras = [
  {
    id: 1,
    nome: 'Feira 1',
    taxaEntrega: 'R$10,00',
    distancia: '1,2 Km',
    imagem: 'https://photo620x400.mnstatic.com/ffbb14919e4d37ab1c20ddc4e2bcac49/mercado-de-barcelos.jpg?quality=70&format=pjpg',
  },
  {
    id: 2,
    nome: 'Feira 2',
    taxaEntrega: 'R$8,00',
    distancia: '0,8 Km',
    imagem: 'https://photo620x400.mnstatic.com/ffbb14919e4d37ab1c20ddc4e2bcac49/mercado-de-barcelos.jpg?quality=70&format=pjpg',
  },
];

interface FairProps {
  feira: {
    id: number;
    nome: string;
    taxaEntrega: string;
    distancia: string;
    imagem: string;
  };
  marginTop: number;
}

const Fair: React.FC<FairProps> = ({ feira, marginTop }) => {
  return (
    <Faircard $marginTop={marginTop}>
      <Image src={feira.imagem} alt={`Imagem da ${feira.nome}`} />
      <TextContainer>
        <Title>{feira.nome}</Title>
        <Body>
          <BoldText>Taxa de entrega:</BoldText> {feira.taxaEntrega}
        </Body>
        <Body>
          <BoldText>Distância:</BoldText> {feira.distancia}
        </Body>
      </TextContainer>
    </Faircard>
  );
};

export const FairList = () => {
  return (
    <MarketplacesCardsContainer>
      {feiras.map((feira, index) => (
        <React.Fragment key={feira.id}>
          <Fair feira={feira} marginTop={index != 0 ? 1 : 0} />
        </React.Fragment>
      ))}
    </MarketplacesCardsContainer>
  );
};
