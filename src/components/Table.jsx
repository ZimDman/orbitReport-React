import React from "react";
import Styling from "./styling.css";
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
       <th>Name</th>
       <th>Type of Satelite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </thead>
     <tbody>
    {sat.map((data, id)=> (
     <tr key={id}>
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational? 'Active':'Inactive'}</td>
     </tr>
     ))}
     </tbody>
   </table>
  );
};

export default Table;