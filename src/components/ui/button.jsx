export const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const styles =
    variant === "secondary"
      ? "bg-gray-200 text-gray-900 hover:bg-gray-300"
      : "bg-indigo-600 text-white hover:bg-indigo-700";

  return (
    <button
      className={`rounded-xl px-6 py-3 font-medium transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
