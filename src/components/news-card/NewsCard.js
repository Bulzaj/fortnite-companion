import { useState } from "react";
import { Card, CardHeader, Tab, Tabs } from "@mui/material";
import NewsCardBody from "./NewsCardBody";

const combineTabs = function (news) {
  const motds = news.motds;
  const messages = news.messages;

  let result = [];

  if (motds instanceof Array) result = [...result, ...motds];

  if (messages instanceof Array) result = [...result, ...messages];

  return result;
};

const NewsCard = function (props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const { news, gameTypeName } = props;

  if (!news || !gameTypeName) return;

  const tabs = combineTabs(news);

  const renderTabs = function (tabs) {
    if (!tabs) return;

    return (
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label={`tab-news-${gameTypeName
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        {tabs.map((tab, index) => (
          <Tab
            id={`tab-news-${index}`}
            key={tab.id || index}
            label={tab.tabTitle || tab.title}
            aria-controls={`tab-news-${gameTypeName
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          />
        ))}
      </Tabs>
    );
  };

  const renderBody = function (tabs) {
    if (!tabs) return;

    if (tabs.length === 1)
      return (
        <NewsCardBody
          img={tabs[0].image}
          title={tabs[0].title}
          body={tabs[0].body}
        />
      );

    return tabs.map((tab, index) => (
      <NewsCardBody
        key={tab.id || index}
        selectedTab={selectedTab}
        index={index}
        img={tab.image}
        title={tab.title}
        body={tab.body}
      />
    ));
  };

  const renderSubheader = function (tabs) {
    if (!tabs || tabs.length === 1) return;
    return renderTabs(tabs);
  };

  const handleTabChange = function (_e, value) {
    setSelectedTab(value);
  };

  return (
    <Card>
      <CardHeader title={gameTypeName} subheader={renderSubheader(tabs)} />
      {renderBody(tabs)}
    </Card>
  );
};

export default NewsCard;
