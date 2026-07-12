import { useEffect, useState } from "react";

const useFetch = (apiFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await apiFunction();

      setData(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    setData,
    loading,
    refresh: fetchData,
  };
};

export default useFetch;
