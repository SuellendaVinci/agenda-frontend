import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("oi");

  useEffect(() => {
    axios
      .get("http://localhost:3333/contacts")
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
    setText("oi, mundo!");
  }, []);

  return <div>{text}</div>;
}

export default App;
