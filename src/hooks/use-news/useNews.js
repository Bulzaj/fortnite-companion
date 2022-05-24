import { useEffect } from "react";
import useFetch from "../use-fetch/useFetch";
import { fortniteApiV2 } from "../../config/axiosConfig";

const useNews = function () {
  const { result, isLoading, fetch } = useFetch(fortniteApiV2);

  useEffect(() => {
    fetch("news");
  }, [fetch]);

  return { news: result, isLoading };
};

export default useNews;
