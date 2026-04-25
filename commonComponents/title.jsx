const Title = ({ children, className = "" }) => {
  return (
    <h1 className="text-[clamp(36px,4.5vw,58px)] font-medium  leading-[1.3] tracking-[-0.025em] m-0 transition-all duration-400 ease-in-out">
      {children}
    </h1>
  );
};

export default Title;
