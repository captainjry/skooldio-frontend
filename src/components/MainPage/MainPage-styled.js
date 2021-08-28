import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";

export const StyledTitle = styled(Typography)`
  color: #ff5a5a;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  line-height: 0.67;
  letter-spacing: normal;
`;

export const StyledSubTitle = styled(Typography)`
  color: #9b9b9b;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
`;

export const StyledUniTitle = styled(Typography)`
  color: #9b9b9b;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
`;

export const StyledButton = styled(Button)`
  color: #ff5a5a;
`;

export const StyledBorder = styled.div`
  width: 100%;
  border: solid 1px #d8d8d8;
`;
