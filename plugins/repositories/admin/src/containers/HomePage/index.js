import React, { useState, useEffect, memo } from 'react';
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";

import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);
  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  useEffect(() => {
    axios
      .get("https://api.github.com/users/anddersonrds/repos?q='&sort=created' + '&order=desc'")
      .then(response => setRows(response.data))
      .catch(e => strapi.notification.error(`Ops... github API limit exceeded, ${e}`));
  }, []);

  return (
    <Wrapper>
      <Header 
        title={{ label: "Github Repositories" }}
        content="A list of my repositories in Github."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
