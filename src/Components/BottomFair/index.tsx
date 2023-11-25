import { useState } from 'react';
import { Button, FairButtonsContainer } from './styles'
import { useRouter } from 'next/router';

type FairButtonsProps = {
  defaultCurrentTab: 'physicalFairs' | 'virtualFairs'
}

export const FairButtons: React.FC<FairButtonsProps> = ({ defaultCurrentTab }) => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<'physicalFairs' | 'virtualFairs'>(defaultCurrentTab)

  return (
    <FairButtonsContainer>
      <Button
        onClick={() => {
          setCurrentTab('physicalFairs')
          router.push('/FeirasFisicas')
        }}
        $isActive={currentTab == 'physicalFairs'}
      >
        Feiras Físicas
      </Button>

      <Button
        onClick={() => {
          setCurrentTab('virtualFairs')
          router.push('/FeirasVirtuais')
        }}
        $isActive={currentTab == 'virtualFairs'}
      >
        Feiras Virtuais
      </Button>
    </FairButtonsContainer>
  );
}; 
