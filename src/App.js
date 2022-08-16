import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("oi");

  useEffect(() => {
    axios
      .get("http://localhost:3333/contacts")
      .then((resp) => {
        setText(resp.data[0].city);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{text}</div>;
}

export default App;
