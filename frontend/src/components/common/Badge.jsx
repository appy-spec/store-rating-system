const Badge = ({ role }) => {
  const colors = {
    admin: "bg-red-100 text-red-600",
    user: "bg-green-100 text-green-600",
    owner: "bg-blue-100 text-blue-600",
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ${colors[role]}
      `}
    >
      {role}
    </span>
  );
};

export default Badge;
