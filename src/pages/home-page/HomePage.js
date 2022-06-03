import { Stack, Container, Typography } from "@mui/material";
import NewsCard from "../../components/news-card/NewsCard";
import SpinnerCentered from "../../components/spinner-centered/SpinnerCentered";
import useNews from "../../hooks/use-news/useNews";

const HomePage = function () {
  const { news, isLoading } = useNews();

  if (isLoading || !news) return <SpinnerCentered />;

  const btNews = news.br;
  const creativeNews = news.creative;
  const stwNews = news.stw;

  return (
    <Container maxWidth="lg">
      <Typography variant="h2">What's News</Typography>
      <Stack gap={2}>
        {btNews && <NewsCard news={btNews} gameTypeName="Battle Royale" />}
        {creativeNews && (
          <NewsCard news={creativeNews} gameTypeName="Creative" />
        )}
        {stwNews && <NewsCard news={stwNews} gameTypeName="Save The World" />}
      </Stack>
    </Container>
  );
};

export default HomePage;
