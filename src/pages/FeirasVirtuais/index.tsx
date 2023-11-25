import React from 'react';
import { BottomNavigation } from "../../Components/Navbar/index";
import { SearchBar } from "../../Components/Search/index";
import { FairButtons } from "../../Components/BottomFair/index";
import { FairList } from "../../Components/FairList/index";
import { PageContainer } from '@/styles/global';

export default function VirtualHome() {
  return (
    <PageContainer $horizontalPadding={2}>
      <SearchBar />

      <FairButtons defaultCurrentTab='virtualFairs' />

      <FairList />

      <BottomNavigation />
    </PageContainer>
  );
}
