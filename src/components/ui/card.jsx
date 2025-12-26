export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border bg-white shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
