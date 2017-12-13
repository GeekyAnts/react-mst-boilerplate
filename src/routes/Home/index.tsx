import * as React from "react";
import {
  Grid,
  Col,
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  // HelpBlock,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";
import Path from "../../constants/routes";
import { observer, inject } from "mobx-react";
import { FormBuilder, Validators, reactiveForm, AbstractControl, FormProps } from "react-reactive-form";
import App from "../../modules";

function asyncValidator(control: AbstractControl) {
    return fetch("https://dog.ceo/api/breed/hound/images")
    .then((response) => { setTimeout(() => null, 0); return response.json(); })
    .then((responseJson) => {
      if (control.value === "kuldeep") {
        return null;
      } 
      if (!control.value) { return control.errors; }
      return {isExist: true};
    })
    .catch((error) => {
      return control.errors;
    });
}
const fb = new FormBuilder();
const loginForm = fb.group({
  username: ["", Validators.required, asyncValidator, "blur"],
  password: ["", Validators.required],
});
interface Props {
  username: FormProps;
  password: FormProps;
  app: typeof App.Type;
}
@inject("app")
@observer
class Home extends React.Component<Props, {}> {
  handleSubmit(event: any) {
    const { app } = this.props;
    const formValues = loginForm.value;
    app.login(formValues.username, formValues.password);
    event.preventDefault();
  }
 componentWillUnmount() {
   loginForm.reset();
 }
  render() {
    const { app, username, password } = this.props;
    return (
      <div>
        <Grid>
          <Col>
            <Panel header="Simple Login"/>
            <FormGroup controlId="username">
              <ControlLabel>Username</ControlLabel>
              {username.pending ? 
              <img style={{height: 20, width: 20 }} src={require("../../assets/loader.gif")}/> : null}
              <FormControl {...username.handler()}/>
              <span style={{color: "red"}}>
                {username.touched && username.hasError("required") && "Username is required"}
                {username.hasError("isExist") && "Username doesn't exist"}
              </span>
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl {...password.handler()}/>
              <span style={{color: "red"}}>
                {password.touched && password.hasError("required") && "Password is required"}
              </span>
            </FormGroup>
            <Button disabled={loginForm.invalid} onClick={() => this.handleSubmit(event)}>
              {app.auth.loading ? 
              <img style={{height: 20, width: 20 }} src={require("../../assets/loader.gif")}/> : null}
              {app.auth.loading ? "Logging In ..." : "Login"}
            </Button>
            <Button onClick={() => app!.navigateTo(Path.user.register)}>
              Register
            </Button>
          </Col>
        </Grid>
        <DevTools />
      </div>
    );
  }
}
export default reactiveForm(Home, loginForm);
