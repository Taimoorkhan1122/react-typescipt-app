import React from "react";

import LoginForm from "./LoginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>learn react</h1>
      <LoginForm
        shouldRemember={true}
        onUsernameChange={(username: string) => {}}
        onPasswordChange={(pasword: string) => {}}
        onRememberChange={(remember: boolean) => {}}
        onSubmit={(username: string, password: string) => {}}
      />
    </div>
  );
}

export default App;
