import { Button } from "./components/Button";
import React from "react";

function App() {
  return (
    <Button color="danger" onClick={() => console.log("Clicked!!")}>
      New Button
    </Button>
  );
}

export default App;
