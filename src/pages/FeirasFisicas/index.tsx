import React from 'react';
import { BottomNavigation } from "../../Components/Navbar/index";
import { SearchBar } from "../../Components/Search/index";
import { FairButtons } from "../../Components/BottomFair";
import { FairList } from "../../Components/FairList/index";
import { PageContainer } from '@/styles/global';

export default function PhysicalHome() {
  return (
    <PageContainer $horizontalPadding={2}>
      <SearchBar />

      <FairButtons defaultCurrentTab='physicalFairs' />

      <FairList />

      <BottomNavigation />
    </PageContainer>
  );
}
