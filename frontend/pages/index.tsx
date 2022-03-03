import type { NextPage } from 'next';
import React from 'react';
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));
const Navbar = dynamic(() => import("../components/Navbar"));

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header title={"Frequently Asked Questions | Stand For Trees"} />
      <Navbar />
    </React.Fragment> 

  )
}

export default Home
