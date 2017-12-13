import * as React from "react";
import {
  Grid,
  Col,
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Checkbox,
  Radio,
  // HelpBlock,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";
import { observer, inject } from "mobx-react";
import { 
  FormBuilder, 
  Validators, 
  reactiveForm, 
  AbstractControl, 
  FormGroup as Group,
  FormProps,
  ValidatorFn,
  ValidationErrors,
} from "react-reactive-form";
import App from "../../modules";

interface Props {
    name: FormProps;
    password: FormProps;
    confirm_password: FormProps;
    address: FormProps;
    gender: FormProps; 
    terms: FormProps;
    app: typeof App.Type;
}

function asyncValidator(control: AbstractControl) {
    return fetch("https://dog.ceo/api/breed/hound/images")
    .then((response) => { setTimeout(() => null, 0); return response.json(); })
    .then((responseJson) => {
      if (control.value === "kuldeep") {
        return {isExist: true};
      } 
      if (!control.value) { return control.errors; }
      return null;
    })
    .catch((error) => {
      return control.errors;
    });
}
function checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string): ValidatorFn {
    return (group: Group): ValidationErrors|null => {
        let passwordInput = group.controls[passwordKey],
            passwordConfirmationInput = group.controls[passwordConfirmationKey];
        if (passwordInput.value !== passwordConfirmationInput.value) {
          passwordConfirmationInput.setErrors({notEquivalent: true});
        } else {
          passwordConfirmationInput.setErrors(null);
        }
        return null;
    };
}
const fb = new FormBuilder();
const registerForm = fb.group({
  name: ["", Validators.required, asyncValidator, "blur"],
  password: ["", [ Validators.required, Validators.minLength(8)]],
  confirm_password: ["", Validators.required],
  address: fb.group({
      city: ["Bangalore", Validators.required],
      country: ["india"],
  }),
  gender: ["male"],
  terms: [false, Validators.requiredTrue],
}, { validators: checkIfMatchingPasswords("password", "confirm_password") });

@inject("app")
@observer
class Home extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  handleSubmit(event: any) {
    const { app } = this.props;
    const user = app!.auth!.user;
    const formValues = registerForm.value;
    if (user) {
      app.update(formValues);
    } else {
      app.register(formValues);
    }
    event.preventDefault();
  }
  handleReset() {
    registerForm.reset();
    registerForm.get("name").enable();
    registerForm.get("password").enable();
    registerForm.get("confirm_password").enable();
    registerForm.get("terms").enable();
  }
  componentDidMount() {
    const { app } = this.props;
    const user = app!.auth!.user;
    if (user) {
      registerForm.get("name").disable();
      registerForm.get("password").disable();
      registerForm.get("confirm_password").disable();
      registerForm.get("terms").disable();
      registerForm.patchValue(user);
    }
  }
  componentWillUnmount() {
    this.handleReset();
  }
  render() {
    const { 
        app, 
        name, 
        password, 
        confirm_password,
        address,
        gender,
        terms,
    } = this.props;
    const { city, country } = address;
    const editMode = !!(app!.auth!.user);
    return (
      <div>
        <Grid>
          <Col>
            <Panel header={editMode ? "Update Profile" : "Simple Register"}/>
            <FormGroup controlId="username">
              <ControlLabel>Username</ControlLabel>
              {name.pending ? 
              <img style={{height: 20, width: 20 }} src={require("../../assets/loader.gif")}/> : null}
              <FormControl {...name.handler()}/>
              <span style={{color: "red"}}>
                {name.touched && name.hasError("required") && "Username is required"}
                {name.hasError("isExist") && "Username is not available"}
              </span>
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" {...password.handler()}/>
              <span style={{color: "red"}}>
                {password.touched && password.hasError("required") && "Password is required"}
                {password.touched && password.hasError("minLength") && "Password Should Be greater than 8 character"}
              </span>
            </FormGroup>
            <FormGroup controlId="confirm_password">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl  type="password" {...confirm_password.handler()}/>
              <span style={{color: "red"}}>
                {confirm_password.touched && confirm_password.hasError("required") && "Please Confirm password"}
                {confirm_password.touched && confirm_password.hasError("notEquivalent") && "Password doesn't match"}
              </span>
            </FormGroup>
            <p>Address</p>
            <div>
            <FormGroup controlId="country">
              <ControlLabel>Country</ControlLabel>
              <select name="country" {...country.handler()}>
                <option value="us">US</option>
                <option value="uk">UK</option>
                <option value="india">India</option>
                <option value="china">China</option>
              </select>
              <span style={{color: "red"}}>
                {country.touched && country.hasError("required") && "Country is required"}
              </span>
            </FormGroup>
            <FormGroup controlId="city">
              <ControlLabel>City</ControlLabel>
              <FormControl {...city.handler()}/>
              <span style={{color: "red"}}>
                {city.touched && city.hasError("required") && "City is required"}
              </span>
            </FormGroup>
            </div>
            <FormGroup controlId="gender">
              <ControlLabel>Gender</ControlLabel>
               <Radio {...gender.handler("radio", "male")}/>
               <span>Male</span>
               <Radio {...gender.handler("radio", "female")}/>Female
            </FormGroup>
            <FormGroup controlId="agree">
               <ControlLabel>I agree to the terms and condition</ControlLabel>
               <Checkbox name="agree" {...terms.handler("checkbox")}/>
            </FormGroup>
            <Button disabled={registerForm.invalid || registerForm.pristine} onClick={() => this.handleSubmit(event)}>
              {app.auth.loading ? 
              <img style={{height: 20, width: 20 }} src={require("../../assets/loader.gif")}/> : null}
              {app.auth.loading ? "Submitting ..." : editMode ? "Update" : "Register"}
            </Button>
          </Col>
        </Grid>
        <DevTools />
      </div>
    );
  }
}
export default reactiveForm(Home, registerForm);
