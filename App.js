import { useState } from "react";
import Login from "./login";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={(creds) => setUser(creds)} />;
  }

  return <div>Welcome, {user.email}!</div>;
}

export default App;
