import { useEffect, useState } from "react";

const useSearch = (data, keys) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const value = search.toLowerCase();

    const result = data.filter((item) =>
      keys.some((key) =>
        String(item[key])
          .toLowerCase()

          .includes(value),
      ),
    );

    setFilteredData(result);
  }, [search, data]);

  return {
    search,
    setSearch,
    filteredData,
  };
};

export default useSearch;
