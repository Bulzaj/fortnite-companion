import { Stack, Container, Typography, Box } from "@mui/material";
import News from "../../components/news-card/NewsCard";
import SpinnerCentered from "../../components/spinner-centered/SpinnerCentered";
import useNews from "../../hooks/use-news/useNews";

const HomePage = function () {
  const { news, isLoading } = useNews();

  if (isLoading) return <SpinnerCentered />;

  return (
    <Container>
      <Typography variant="h2">What's News</Typography>
      <Stack>
        <News gameType={news?.br} gameTypeName="Battle Royale" />
      </Stack>
    </Container>
  );
};

export default HomePage;
