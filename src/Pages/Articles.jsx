import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import useTeamsArticles from "../hooks/useArticles";

const Articles = () => {
  const { teamId } = useParams();
  return <div></div>;
};

export default Articles;
