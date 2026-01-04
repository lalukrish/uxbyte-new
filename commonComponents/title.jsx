const Title = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-[28px] xl:text-[52px] 2xl:text-[56px] mb-4 font-semibold text-black ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
