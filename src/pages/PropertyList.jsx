import React from "react";
import axios from "axios";

const PropertyList = ({ propertyData, getData, setPropertyData }) => {
  // const [data, setData] = useState(propertyData);
  // Deleting Data
  console.log("k", propertyData);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/propertiess/${id}`);
    getData();
  };
  // const handleSort = async () => {
  //   const sortedData = await propertyData.sort((a, b) => {
  //     return a.size - b.size;
  //   });
  //   setPropertyData(sortedData);
  //   // setData(sortedData);
  //   console.log(sortedData);
  // };

  // useEffect(() => {
  //   setData(propertyData);
  // }, [data, propertyData]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Size</th>
            <th>Action</th>
            {/* <th>
              <button onClick={handleSort}>Sort</button>
            </th> */}
          </tr>
        </thead>
        {propertyData.length !== 0 ? (
          propertyData.map((item) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.size}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <>
            <h3>
              Please Start the server before adding any data or to show
              exsisting data in DB
            </h3>
            <h3>To Start the server run the following command in terminal</h3>
            <h2>json-server --watch db.json --port 8080</h2>
          </>
        )}
      </table>
    </div>
  );
};

export default PropertyList;
