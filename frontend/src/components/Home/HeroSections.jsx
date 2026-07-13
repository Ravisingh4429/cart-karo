import React from "react";
import "./HeroSections.css";
import { NavLink } from "react-router-dom";
const HeroSections = ({ title, subtitle, link, image }) => {
  return (
    <section className="hero_section_1">
      <div className="left">
        <h2 className="hero_title">{title}</h2>
        <p className="hero_subtitle">{subtitle} </p>
        <NavLink to={link} className="hero_link">
          Buy Now
        </NavLink>
      </div>
      <div className="right">
        <img src={image} className="hero_image" alt="" />
      </div>
    </section>
  );
};

export default HeroSections;
