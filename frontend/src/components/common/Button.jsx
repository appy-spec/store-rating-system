const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",

    secondary:
      "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",

    danger: "bg-red-600 hover:bg-red-700 text-white",

    success: "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <button
      type={type}
      className={`
        px-5
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
