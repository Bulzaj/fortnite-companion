import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

const NewsCardHeader = function (props) {
  const { gameTypeName, tabs } = props;
  const [value, setValue] = useState();

  const renderTabs = function (tabs) {
    return tabs?.map((tab) => (
      <Tab
        id={`tab-${tab.id}`}
        aria-controls={`tabpanel-${tab.id}`}
        label={tab.tabTitle}
      />
    ));
  };

  const handleTabChange = function (_, newValue) {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs value={value} onChange={handleTabChange}>
          <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <Typography variant="overline">{gameTypeName}</Typography>
          </Box>
          {renderTabs(tabs)}
        </Tabs>
      </Box>
    </Box>
  );
};

export default NewsCardHeader;
