const SortSelect = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="
            border
            rounded-xl
            px-4
            py-3
            outline-none
            bg-white
        "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
