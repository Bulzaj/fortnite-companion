import { useState, useCallback } from "react";
import FetchError from "../../errors/fetchError";

const useFetch = function (axiosInstance) {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(
    async function (path) {
      try {
        setIsLoading(true);

        if (!axiosInstance) throw new FetchError("Axios instance not provided");
        if (!path) throw new FetchError("No resource path provided");

        const result = await axiosInstance.get(path);
        setResult(result.data.data);
      } catch (error) {
        throw new FetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance]
  );

  return { result, isLoading, fetch };
};

export default useFetch;
