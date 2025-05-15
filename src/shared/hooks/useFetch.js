// useFetch.js
import { useEffect, useState } from "react";

const useFetch = ({ request, initialData }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const result = await request();

      if (!ignore) {
        if (result?.error) {
          setError(result.error);
        } else {
          setData(result.data);
        }
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [request]); // ⚠️ важно: request должен быть в зависимостях

  return { data, loading, error };
};

export default useFetch;

