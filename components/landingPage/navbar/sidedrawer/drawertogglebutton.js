import React from "react";

export default function drawertogglebutton({ toggle, click }) {
  // const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <button
      className="toggle-button"
      onClick={() => {
        toggle, click();
      }}
    >
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
}
