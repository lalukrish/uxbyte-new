const Title = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-[clamp(28px,4vw,56px)] mb-4 font-medium text-black leading-[1.3] ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
