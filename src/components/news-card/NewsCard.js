import { useState } from "react";
import { Card, CardHeader, Tab, Tabs } from "@mui/material";
import NewsCardBody from "./NewsCardBody";

const NewsCard = function (props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const { news, gameTypeName } = props;

  if (!news || !gameTypeName) return;

  const tabs = news.motds;

  const renderTabs = function (tabs) {
    if (!tabs) return;
    return tabs.map((tab, index) => (
      <Tab
        id={`tab-news-${index}`}
        key={tab.id}
        label={tab.tabTitle}
        aria-controls={`tab-news-${gameTypeName
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      />
    ));
  };

  const renderBody = function (tabs) {
    if (!tabs) return;
    return tabs.map((tab, index) => (
      <NewsCardBody
        key={tab.id}
        selectedTab={selectedTab}
        index={index}
        img={tab.image}
        title={tab.title}
        body={tab.body}
      />
    ));
  };

  const handleTabChange = function (_e, value) {
    setSelectedTab(value);
  };

  return (
    <Card>
      <CardHeader
        title={gameTypeName}
        subheader={
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label={`tab-news-${gameTypeName
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            {renderTabs(tabs)}
          </Tabs>
        }
      />
      {renderBody(tabs)}
    </Card>
  );
};

export default NewsCard;
