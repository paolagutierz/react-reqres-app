import React from "react";
import Page from "../components/Page";
import ListTable from "../components/ListTable";
import FormToEdit from "../components/FormToEdit";

const Home = () => {
  return (
    <Page>
      <ListTable />
      <FormToEdit />
    </Page>
  );
};

export default Home;
