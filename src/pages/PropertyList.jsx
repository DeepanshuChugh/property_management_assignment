import React from "react";
import axios from "axios";

const PropertyList = ({ propertyData, getData, setPropertyData }) => {
  // const [data, setData] = useState(propertyData);
  // Deleting Data
  console.log("k", propertyData);
  const handleDelete = async (id) => {
    await axios.delete(
      `https://agile-inlet-56926.herokuapp.com/properties/${id}`
    );
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

        {propertyData.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.size}</td>
                <td>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default PropertyList;
