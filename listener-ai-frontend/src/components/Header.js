import React from "react";
import "./Header.css";

function Header({ onSectionChange }) {
  return (
    <div className="header">
      <h1>Listener AI</h1>
      <button className="button" onClick={() => window.location.href = "https://listener-ai.streamlit.app/"}>
        Record / Upload Audio
      </button>
    </div>
  );
}

export default Header;
