import React from "react";
import Card from "../Home/Card.jsx";
export default function Cards() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="homefifthh1">We are a full-service creative agency</p>
            <p className="homefifthh2 mt-2">
              Our team of designers, developers and creatives are perfectionists{" "}
              <br />
              who love what they do and love
            </p>
          </div>
          <Card
            img="blog1.jpg"
            head=" How your sales can work together in account-based marketing"
          ></Card>
          <Card
            img="blog2.jpg"
            head="The six things marketers need to understand about DTC
            marketing"
          ></Card>
          <Card
            img="blog3.jpg"
            head=" Eleven top tips for developing agile marketing"
          ></Card>
          <Card
            img="blog1.jpg"
            head=" How your sales can work together in account-based marketing"
          ></Card>
          <Card
            img="blog2.jpg"
            head="The six things marketers need to understand about DTC
            marketing"
          ></Card>
          <Card
            img="blog3.jpg"
            head=" Eleven top tips for developing agile marketing"
          ></Card>
        </div>
      </div>
    </>
  );
}
