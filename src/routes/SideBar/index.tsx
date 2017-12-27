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
export default class SideBar extends React.Component<{app?: typeof App.Type, history?: any}, {}> {
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
    if (!user) { return <div/>; }
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
          <br/>
          <div>
            <Button onClick={() => app!.navigateTo(Path.todo.todos)}>My Todos</Button>
          </div>
          <br/>
          <div>
             <Button onClick={() => this.update()}>Update Profile</Button>
          </div>
          <br/>
          <div>
            <Button bsStyle="danger" onClick={() => this.logout()}>
                {app!.auth.loading ? "Logging Out ..." : "Logout"}
            </Button>
          </div>
        </Grid>
        <DevTools />
      </div>
    );
  }
}
