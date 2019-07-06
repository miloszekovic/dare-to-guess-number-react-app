import React from "react";

import { Grid, Typography, Paper, Divider } from "@material-ui/core";

import Form from "./components/Form";
import Progress from "./components/Progress";
import { generateRandomNumber } from "./util";

class App extends React.Component {
  state = {
    generateNumber: generateRandomNumber(),
    guess: undefined,
    allGuesses: [],
    attempt: 0
  };

  updateAppState = guess => {
    //console.log(guess)
    //console.log(generateRandomNumber())

    const absDiff = Math.abs(guess - this.state.generateNumber);

    this.setState(prevState => ({
      guess,
      allGuesses: [...prevState.allGuesses, { guess }],
      attempt: prevState.attempt + 1
    }));
  };

  render() {
    const { allGuesses, attempt } = this.state;

    const guessList = allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));

    return (
      <Grid
        container
        style={{ height: "100vh" }}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper style={{ padding: "50px" }} elevation={6}>
            <Typography align="center" variant="h2" gutterBottom>
              Hot or Not
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Form returnGuessToApp={guess => this.updateAppState(guess)} />
            <Progress attempt={attempt} guessList={guessList} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
