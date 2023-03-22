import React from "react";
import "./homeMainBg.scss";

export default function HomeMainBg(){
    return (
        <div className="homeMainBg">
            <div className="position-absolute text-center">
              <h1 className="mb-0">Cheena Hair</h1>
              <h1 className="mb-0 text-center">&</h1>
              <h1 className="mb-3">Beauty Saloon</h1>
              <button className="btn bg-light text-uppercase rounded-0 pt-2 pb-2 pl-3 pr-3 mt-4">Book Appointment</button>
            </div>
        </div>
    )
}