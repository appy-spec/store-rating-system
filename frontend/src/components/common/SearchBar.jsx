const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        md:w-80
        rounded-xl
        border
        border-gray-300
        px-4
        py-3
        focus:ring-2
        focus:ring-indigo-200
        outline-none
      "
    />
  );
};

export default SearchBar;
