import { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "./components/ContactCard";

function App() {
  const [text, setText] = useState("oi");

  useEffect(() => {
    axios
      .get("http://localhost:3333/contacts")
      .then((resp) => {
        console.log(resp);
        // setText(resp.data[0].city);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return <div>
    <ContactCard name='Emanuel Diego Rocha' city='Niterói' state= 'RJ' />
  </div>;
}

export default App;
