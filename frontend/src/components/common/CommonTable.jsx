const CommonTable = ({ columns, data, actions }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="
                    text-left
                    px-6
                    py-4
                    font-semibold
                    text-gray-700
                "
              >
                {column.label}
              </th>
            ))}

            {actions && <th className="px-6 py-4">Actions</th>}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="
                    text-center
                    py-8
                    text-gray-500
                "
              >
                No Data Found
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr
                key={item.id}
                className="
                    border-b
                    hover:bg-gray-50
                "
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4">
                    {column.render ? column.render(item) : item[column.key]}
                  </td>
                ))}

                {actions && <td className="px-6 py-4">{actions(item)}</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
