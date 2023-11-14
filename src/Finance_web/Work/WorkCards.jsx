import React from "react";
import Card from "./Card";
export default function WorkCards() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="h3 mt-4 mb-5">
              Crafting effective digital marketing, web development, <br />
              video content and communication design
            </p>
          </div>
          <Card
            img="blog1.jpg"
            title="HasThemes Development: An outstanding payment app"
            det="  Quickly analyzing the digital business landscape, we create
          effective action plans and design optimal strategies."
          ></Card>
          <Card
            img="blog2.jpg"
            title="Dashboards UI Kit open-source set of ready-to-use templates"
            det="  Quickly analyzing the digital business landscape, we create
          effective action plans and design optimal strategies."
          ></Card>
          <Card
            img="blog1.jpg"
            title="HasThemes Development: An outstanding payment app"
            det="  Quickly analyzing the digital business landscape, we create
          effective action plans and design optimal strategies."
          ></Card>
          <Card
            img="blog2.jpg"
            title="Dashboards UI Kit open-source set of ready-to-use templates"
            det="  Quickly analyzing the digital business landscape, we create
          effective action plans and design optimal strategies."
          ></Card>
          <Card
            img="blog1.jpg"
            title="HasThemes Development: An outstanding payment app"
            det="  Quickly analyzing the digital business landscape, we create
          effective action plans and design optimal strategies."
          ></Card>
          <Card
            img="blog3.jpg"
            title="Dashboards UI Kit open-source set of ready-to-use templates"
            det="  Quickly analyzing the digital business landscape, we create
          effective action plans and design optimal strategies."
          ></Card>
        </div>
      </div>
    </>
  );
}
