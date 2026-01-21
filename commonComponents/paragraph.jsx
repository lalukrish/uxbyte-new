import React from "react";

const Paragraph = ({ children, className = "", asHtml = false }) => {
  if (asHtml) {
    return (
      <div
        className={`xl:text-[19px] 2xl:text-[20px] text-[#1b1b1b] ${className}`}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return (
    <div
      className={`xl:text-[19px] 2xl:text-[20px] text-[#303030] ${className}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
