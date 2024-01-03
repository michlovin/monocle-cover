import React from "react";
import "./Cover.css"; // Import your stylesheet
import plane from "../../assets/plane.jpg";
// import { NAV_DATA } from "../data.jsx";

// const navBar = NAV_DATA;

const MagazineCover = () => {
  return (
    <div className="background">
      <div className="cover-title">
        <div id="header">
          <Header title="2024 Around the World" subtitle="back in action" />
        </div>
        <div className="container rows">
          <NavigationBar articlename={NAV_DATA[0].articlename} />
          <NavigationBar articlename={NAV_DATA[1].articlename} />
          <NavigationBar articlename={NAV_DATA[2].articlename} />
          <NavigationBar articlename={NAV_DATA[3].articlename} />
          <NavigationBar articlename={NAV_DATA[4].articlename} />
          <NavigationBar articlename={NAV_DATA[5].articlename} />
        </div>
        <div className="container rows">
          <ArticleDescription articledescription="Artesian goods..Seasonal Foods..Books" />
          <ArticleDescription articledescription="Records..Resturants.." />
          <ArticleDescription articledescription="Markets..Bars..Museums" />
        </div>
      </div>
      <div className="container">
        <img src={plane} alt="Magazine Cover" className="coverimage" />
      </div>
      <div className="footer rows">
        <FooterDescription footer="Join us for a tour around the world with 80 days of itinerary" />
      </div>
    </div>
  );
};

export default MagazineCover;
