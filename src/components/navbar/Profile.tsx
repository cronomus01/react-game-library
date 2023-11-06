import React from "react";
import "./Profile.css";
import MyProfileImage from "@/assets/irefrans-cosme.png";
const Profile = () => {
  return (
    <div className="w-[30px]">
      <img className="w-full rounded-full" src={MyProfileImage} alt="test" />
    </div>
  );
};

export default Profile;
