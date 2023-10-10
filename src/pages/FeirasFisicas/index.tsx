import React from 'react';
import {BottomNavigation} from "../../Components/Navbar/index";
import {SearchBar} from "../../Components/Search/index";
import {BottomFair} from "../../Components/BottomFair/index";
import {FairList} from "../../Components/FairList/index";

export default function PhysicalHome() {
  return (
    <><SearchBar /><BottomNavigation /><BottomFair/> <FairList/></>
  );
}