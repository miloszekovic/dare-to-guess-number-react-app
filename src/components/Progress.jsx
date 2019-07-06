import React from "react";

import "./Progress.css";

import { Typography } from "@material-ui/core";

const Progress = ({ attempt, guessList }) => (
  <div>
    <Typography style={{ marginTop: "30px" }} variant="h4">
      Guess # {attempt}
    </Typography>
    <ul className="progress-bar__history">{guessList}</ul>
  </div>
);

export default Progress;
