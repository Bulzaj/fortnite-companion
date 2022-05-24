import { Card } from "@mui/material";
import NewsCardHeader from "./NewsCardHeader";

const News = function (props) {
  const { gameType, gameTypeName } = props;
  console.log(gameType);
  return (
    <Card>
      <NewsCardHeader gameTypeName={gameTypeName} tabs={gameType?.motds} />
    </Card>
  );
};

export default News;
