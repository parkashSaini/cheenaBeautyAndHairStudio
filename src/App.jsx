import React from "react";
import Header from "./components/common/Header";
import HomeMainBg from "./components/layout/HomeMainBg/HomeMainBg";
import ServiceMenu from "./components/layout/HomeMainBg/ServicesMenu";

export default function App(){
    return (
       <>
       <div className="container-fluid">
        <div className="row">
          <Header/>
          <HomeMainBg/>
          <ServiceMenu/>
        </div>
       </div>
       </>
    );
}