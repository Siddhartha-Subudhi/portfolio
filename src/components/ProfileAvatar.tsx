
import * as React from "react";

const ProfileAvatar: React.FC = () => {
  // Placeholder; replace src with uploaded profile image when available.
  return (
    <div className="rounded-full border-4 border-primary shadow-xl w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center animate-fade-in hover:scale-105 transition-transform duration-300 group bg-white">
      <img
        src="https://randomuser.me/api/portraits/men/85.jpg"
        alt="Siddhartha Subudhi Profile"
        className="rounded-full object-cover w-44 h-44 md:w-60 md:h-60 border-4 border-white group-hover:scale-110 transition-transform duration-500"
      />
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-base font-semibold shadow-lg animate-fade-in">
        Azure Data Engineer
      </span>
    </div>
  );
};

export default ProfileAvatar;
