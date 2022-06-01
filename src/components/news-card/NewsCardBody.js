import { Box, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCardBody = function (props) {
  const { selectedTab, index, img, title, body } = props;

  if (!img || !title || !body) return;

  return (
    <Box role="tabpanel" hidden={selectedTab !== index}>
      <CardMedia component="img" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default NewsCardBody;
