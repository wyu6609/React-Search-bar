import { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  let filteredJSONDATA = JSONDATA.filter((obj) => {
    if (search == "") {
      return obj;
    } else if (obj.first_name.toLowerCase().includes(search.toLowerCase())) {
      return obj;
    }
  });
  const JSONList = filteredJSONDATA.map((obj, index) => {
    return <p keys={index}>{obj.first_name}</p>;
  });

  return (
    <div className="App">
      <input type="search" placeholder="search..." onChange={handleSearch} />
      <div>{JSONList}</div>
    </div>
  );
}

export default App;
