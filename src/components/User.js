import React from "react";
import "./User.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const User = () => {
  return (
    <div className="user">
      <img src="./media/avatar.png" alt="" className="user__avatar" />
      <h1 className="user__name">Mohamed CHEHEM</h1>
      <p className="user__profession">Développeur Front-end</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          48 Rue Fernig, 59300, Valenciennes
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33660469119">07 66 04 80 81</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="chehem21@gmail.com">chehem21@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon />
          Date de naissance : 20 octobre 2000
        </p>
        <p className="user__info">
          <LocationOnIcon />
          Lieu de naissance : Djibouti
        </p>
      </div>
    </div>
  );
};

export default User;
