import { useMemo } from "react";

const useSort = (data, sortBy) => {
  return useMemo(() => {
    const sorted = [...data];

    switch (sortBy) {
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));

      case "email":
        return sorted.sort((a, b) => a.email.localeCompare(b.email));

      case "role":
        return sorted.sort((a, b) => a.role.localeCompare(b.role));  

      default:
        return sorted;
    }
  }, [data, sortBy]);
};

export default useSort;
