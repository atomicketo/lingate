import React from "react";
import Paper from "@material-ui/core/Paper";

export default function Slope(props) {
  return (
    <React.Fragment>
      <Paper
        style={{
          backgroundColor: "#fcfcfc",
          borderRadius: 10,
          marginBottom: 30,
          padding: 20
        }}
        elevation={5}
      >
        <h2
          style={{
            backgroundColor: "#113448",
            textAlign: "center",
            marginTop: 16,
            color: "white",
            padding: 10,
            borderRadius: 10
          }}
        >
          VIDEO-TUTORIAL
        </h2>
        {/* <video className="center" style={{ alignSelf: "center" }} controls>
          <source src={require("./sample.mp4")} type="video/mp4" />
        </video> */}
      </Paper>
      <style scoped jsx>{`
        .center {
          margin: 0 auto;
          width: 300px;
        }
      `}</style>
    </React.Fragment>
  );
}
