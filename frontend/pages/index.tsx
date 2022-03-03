import type { NextPage } from 'next';
import React from 'react';
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header title={"Frequently Asked Questions | Stand For Trees"} />
    </React.Fragment> 

  )
}

export default Home
