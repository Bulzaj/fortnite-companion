import { Box, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCardBody = function (props) {
  const { selectedTab, index, img, title, body } = props;

  if (!img || !title || !body) return;

  const renderBodyContent = function (img, title, body) {
    return (
      <>
        <CardMedia component="img" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </>
    );
  };

  if (!selectedTab && !index) {
    return <Box>{renderBodyContent(img, title, body)}</Box>;
  }

  return (
    <Box role="tabpanel" hidden={selectedTab !== index}>
      {renderBodyContent(img, title, body)}
    </Box>
  );
};

export default NewsCardBody;
