import React from "react";
const Navbar = () => {
  return (
    <div className="flex items-center pl-20 h-20 pt-10">
      <svg
        width="80px"
        height="40px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="#fff"
          d="M0 0l7.971 15.516L16 0H0zm6.732 6.16h-1.27V4.89h1.27v1.27zm0-1.906h-1.27V2.985h1.27v1.269zm1.904 3.81h-1.27v-1.27h1.27v1.27zm0-1.905h-1.27V4.89h1.27v1.27zm0-1.905h-1.27V2.985h1.27v1.269zm1.894 1.905H9.26V4.89h1.27v1.27zM9.26 4.254V2.985h1.27v1.269H9.26z"
        />
      </svg>
      <p className="tracking-tight text-slate-100 font-extrabold text-4xl">
        Reaver Vault
      </p>
    </div>
  );
};

export default Navbar;
