import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-montserrat">
      <Button />
    </div>
  );
}

export default App;
