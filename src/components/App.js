import React from "react";
import { Switch, Route } from "react-router-dom";

import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import Notifications from "../pages/Notifications";
import EditPost from "../pages/EditPost";

function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>

      <a href="/">Posts</a> |{" "}
      <a href="/users">Users</a> |{" "}
      <a href="/notifications">Notifications</a>

      <Switch>
        <Route exact path="/" component={PostsPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/posts/:id" component={EditPost} />
      </Switch>
    </div>
  );
}

export default App;