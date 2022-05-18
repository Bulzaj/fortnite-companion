import { useEffect } from "react";
import { fortniteApiV2 } from "../../config/axiosConfig";

const HomePage = function () {
  useEffect(() => {
    const fetch = async function () {
      const data = await fortniteApiV2.get("/news");
      console.log(data);
    };
    fetch();
  }, []);
  return <div>Home Page</div>;
};

export default HomePage;
