const Title = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-[28px] xl:text-[50px] 2xl:text-[56px] mb-4 font-normal text-black ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
