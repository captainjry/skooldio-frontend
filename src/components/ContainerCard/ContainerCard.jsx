import React from "react";
import { Card, CardContent } from "@material-ui/core";

import MainPage from "../MainPage/MainPage";

const ContainerCard = () => {
  return (
    <Card>
      <CardContent>
        <MainPage />
      </CardContent>
    </Card>
  );
};

export default ContainerCard;
