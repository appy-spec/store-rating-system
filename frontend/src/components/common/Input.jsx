const Input = ({ label, type = "text", textarea = false, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="font-medium text-gray-700">{label}</label>

      {textarea ? (
        <textarea
          rows="4"
          className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              resize-none
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-200
              transition
            "
          {...props}
        />
      ) : (
        <input
          type={type}
          className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-200
              transition
            "
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
