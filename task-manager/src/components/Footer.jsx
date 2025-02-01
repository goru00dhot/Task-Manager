import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <p>© {new Date().getFullYear()} Task Manager App</p>
    </footer>
  );
}

export default Footer;
