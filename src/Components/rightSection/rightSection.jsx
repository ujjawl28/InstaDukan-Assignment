import  { useState } from "react";
import "./rightSection.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from "../Card/card";

export default function RightSection() {
  const [list] = useState([
    {
      id: 1,
      title: "Ferry from Port Blair to Havelock",
      description: "Enjoy a scenic journey from Port Blair to Havelock Island.",
      image: "https://cdn.experienceandamans.com/images/ferry-from-port-blair-to-havelock-island.jpg",
      price: 12000
    },
    {
      id: 2,
      title: "Ferry from Havelock to Neil",
      description: "Travel from Havelock to Neil Island with ease.",
      image: "https://cdn.experienceandamans.com/images/ferry-from-havelock-island-to-neil-island.jpg",
      price: 1400
    },
    {
      id: 3,
      title: "Ferry from Neil to Port Blair",
      description: "Return to Port Blair from Neil Island safely.",
      image: "https://cdn.experienceandamans.com/images/ferry-from-neil-to-port-blair-625d274580fc4.jpg",
      price: 1100
    },
    {
      id: 4,
      title: "Ferry from Port Blair to Havelock to Neil and back to Port Blair",
      description: "An all-in-one ferry journey covering multiple islands.",
      image: "https://cdn.experienceandamans.com/images/ferry-from-port-blair-to-havelock-island.jpg",
      price: 1000
    }
  ]);
  

  

  return (
    <div style={{width:"100%"}}>
      <div className="rightSection">
          {
         list.map((it) => {
          console.log(it)
          return (
             <Card it={it} key={it.id}/>
          );
        })
      }
      
      </div>
     
      <ToastContainer />
      
    </div>
  );
}
