import React, { useState } from "react";
import { dropdownArrow } from "../../../svgs/svgs";

export default function Genericgeneric_dropdown({
  field,
  options,
  width,
  placeholder,
  onSelection,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    onSelection(option, field);
  };
  return (
    <div
      className="generic_dropdown_container"
      style={{ width: `${width}px` }}
      onMouseLeave={() => setShowOptions(false)}
    >
      <div className="generic_dropdown">
        <div className="generic_dropdown_left_section">
          {selectedOption?.text || placeholder}{" "}
        </div>
        <div
          className="generic_dropdown_right_section"
          onMouseEnter={() => setShowOptions(true)}
        >
          <div className="vertical-line"></div>
          <div className="generic_dropdown_arrow">{dropdownArrow}</div>
        </div>
      </div>
      {showOptions && (
        <div className="generic_dropdown_options">
          {options.map((option) => {
            return (
              <div
                className="generic_dropdown_option"
                key={option.key}
                onClick={() => handleOptionSelection(option)}
              >
                {option.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
