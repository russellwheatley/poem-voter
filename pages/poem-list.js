import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  textField: {
    width: 400
  }
});

function AddPoem({ classes }) {
  return (
    <form className={classes.container}>
      <TextField
        required
        id="userName"
        placeholder="Your username"
        name="userName"
        label="User name"
        className={classes.textField}
      />
      <TextField
        required
        placeholder="Title"
        name="title"
        label="Title of Poem"
        className={classes.textField}
      />
      <TextField
        id="poem"
        label="Poem"
        placeholder="Write your poem here...."
        multiline
        required
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
}

export default withStyles(styles)(AddPoem);
