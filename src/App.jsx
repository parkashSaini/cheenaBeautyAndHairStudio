import React from "react";
import Header from "./components/common/Header";
import HomeMainBg from "./components/layout/HomeMainBg/HomeMainBg";

export default function App(){
    return (
       <>
       <div className="container-fluid">
        <div className="row">
          <Header/>
          <HomeMainBg/>
        </div>
       </div>
       </>
    );
}