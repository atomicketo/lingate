import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "../components/Drawer";
import { Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Mathjax from "./Mathjax";
import Limits from "./componentPage/Limits";
import Slope from "./componentPage/Slope";
import VideoContainer from "./componentPage/VideoContainer";
const useStyles = makeStyles({
  paddingTop: {
    paddingTop: 50
  }
});

export default function DerivativesPage(props) {
  const { back } = props;
  return (
    <React.Fragment>
      <Drawer />
      <Container fixed style={{ marginTop: 80 }}>
        <Card style={{ padding: 20 }}>
          <Slope />
          <Limits />
          <VideoContainer />
          <Button
            variant="contained"
            style={{ marginTop: 20, paddingRight: 20, paddingLeft: 20 }}
            color="#3f51b5"
            onClick={() => back()}
          >
            Back
          </Button>
        </Card>
      </Container>
      <style jsx>{`
        body {
          font-family: "Comic Sans MS";
        }
        p {
          font-size: 1rem;
        }
        h2 {
          // margin-top: 50px;
          font-size: 1.3rem;
          letter-spacing: 4px;
        }
      `}</style>
    </React.Fragment>
  );
}
