import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);

  const request = async (...args) => {
    const response = await apiFunc(...args);
    setData(response.data);
  };

  return { request, data };
};
