const CommonTable = ({ columns, data, actions }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-4 text-left font-semibold"
              >
                {column.label}
              </th>
            ))}

            {actions && <th className="px-6 py-4 text-left">Actions</th>}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="py-8 text-center text-gray-500"
              >
                No Data Found
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4">
                    {column.render
                      ? column.render(item)
                      : column.key === "created_at"
                        ? new Date(item[column.key]).toLocaleDateString("en-GB")
                        : column.key === "rating"
                          ? (item[column.key] ?? "No Rating")
                          : column.key === "overallRating"
                            ? (item[column.key] ?? "No Overall Rating")
                            : item[column.key]}
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
