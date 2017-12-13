import * as React from "react";
import {
  Grid,
  Button,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";
import { observer, inject } from "mobx-react";
import Path from "../../constants/routes";
import { FormattedMessage } from "react-intl";
import App from "../../modules";

@inject("app")
@observer
export default class Dashboard extends React.Component<{app?: typeof App.Type, history?: any}, {}> {
  logout() {
    const { app } = this.props;
    app!.logout(app!.auth!.user!.token);
  }
  update() {
    const { app } = this.props;
    app!.navigateTo(Path.user.update);
  }
  render() {
    const { app } = this.props;
    const user = app!.auth!.user;
    const username = user && user.name || "";
    return (
      <div>
        <Grid>
        <FormattedMessage
          id="app.greeting_message"
          values={{name: username}}
        />
          <p>Address: {user && user!.address.city}, 
          {user && user!.address.country}</p>
          <p>Gender: {user && user!.gender}</p>
          <Button bsStyle="danger" onClick={() => this.logout()}>
            {app!.auth.loading ? "Logging Out ..." : "Logout"}
          </Button>
          <Button onClick={() => this.update()}>Update</Button>
          <Button onClick={() => app!.navigateTo(Path.todo.todos)}>My Todos</Button>
        </Grid>
        <DevTools />
      </div>
    );
  }
}
