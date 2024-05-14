import React, { Component, useCallback, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";
import axios from "axios";
import { githubStatsURL } from "../../portfolio";

const OpenSource = ({ theme, onToggle }) => {
  const [githubRepoStats, setGithubRepoStats] = useState(null);

  const fetchGithubReposStats = useCallback(async () => {
    try {
      // getting all repos
      const response = await axios.get(githubStatsURL);
      setGithubRepoStats(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [githubStatsURL]);

  useEffect(() => {
    fetchGithubReposStats();
  }, []);

  return (
    <div className="opensource-main">
      {githubRepoStats ? (
        <>
          <Header theme={theme} />
          <OpensourceCharts theme={theme} statsData={githubRepoStats} />
          <PullRequests theme={theme} statsData={githubRepoStats} />
          <Issues theme={theme} statsData={githubRepoStats} />
          <Footer theme={theme} onToggle={onToggle} />
          <TopButton theme={theme} />
        </>
      ) : null}
    </div>
  );
};

export default OpenSource;
