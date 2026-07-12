const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
                bg-white
                rounded-2xl
                shadow-sm
                border
                border-gray-200
                p-6
                hover:shadow-lg
                transition
                ${className}
            `}
    >
      {children}
    </div>
  );
};

export default Card;
