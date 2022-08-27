import axios from "axios";
import { useEffect, useState } from "react";
import AddModal from "./components/Modal";
import PropertyList from "./pages/PropertyList";
import "./App.css";
function App() {
  const [propertyData, setPropertyData] = useState([]);

  // Geetting Data
  const getData = async () => {
    let r = await axios.get("http://localhost:8080/propertiess");
    console.log(r.data);
    setPropertyData(r.data);
  };

  // Calling Function to getdata
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <AddModal getData={getData} />
      <PropertyList
        propertyData={propertyData}
        getData={getData}
        setPropertyData={setPropertyData}
      />
    </div>
  );
}

export default App;
