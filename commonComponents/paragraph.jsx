import React from "react";

const Paragraph = ({ children, className = "", asHtml = false }) => {
  if (asHtml) {
    return (
      <div
        className={`xl:text-[19px] 2xl:text-[20px] text-black ${className}`}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return (
    <div className={`xl:text-[19px] 2xl:text-[20px] text-black ${className}`}>
      {children}
    </div>
  );
};

export default Paragraph;
