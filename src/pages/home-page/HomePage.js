import { Stack, Container, Typography } from "@mui/material";
import NewsCard from "../../components/news-card/NewsCard";
import SpinnerCentered from "../../components/spinner-centered/SpinnerCentered";
import useNews from "../../hooks/use-news/useNews";

const HomePage = function () {
  const { news, isLoading } = useNews();

  if (isLoading || !news) return <SpinnerCentered />;

  const btNews = news.br;

  return (
    <Container maxWidth="md">
      <Typography variant="h2">What's News</Typography>
      <Stack>
        <NewsCard news={btNews} gameTypeName="Battle Royale" />
      </Stack>
    </Container>
  );
};

export default HomePage;
