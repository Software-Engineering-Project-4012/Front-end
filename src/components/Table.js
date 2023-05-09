import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream
import Icon, { Result } from "../components/icon";
import  "../styles/Table.css"
const icon1=false;
function Table({arr}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
=======
import Icon, { Result,Edit,Delete } from "../components/icon";

import {useManagerMainContext} from "../contexts/managerMainContext"

import  "../styles/Table.css"
let iconManager=false;
let check=false;
let fillIcon=false;
let userList=false;


function Table(props) {
  
   const [data,setData]=useManagerMainContext();
  setData(props.data);
  
  let counter=1;
>>>>>>> Stashed changes
  return (
    <div >
      <table>
        <thead>
          <tr>
<<<<<<< Updated upstream
            {arr.map((element) =>{
=======
            {props.columns.map((element) =>{
>>>>>>> Stashed changes
                switch(element){
                  case "icon1":{
                    return <th> </th>;
                    icon1=true;
                  }
                  case "check": ;
                  default:
                    return <th>{element}</th>;
                }
              }
            )}
          </tr>
        </thead>
        
        <tbody>
<<<<<<< Updated upstream
          {data.map((item,key) => (
            <tr key={key}>
               <td><Result /></td> 
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
=======
        {[data].map((item) => (  
          <tr key={item.id}>
            {iconManager &&(
              <td className="iconManager"><Result /></td>
            )}
            {userList&&(
              <td className="usersListIcons">
                <div className="icon_container">
                  <Edit />
                  <Delete />
                </div>
              </td>
            )}
            {props.values.map((element)=>
              <td>{item[element]}</td>                
            )}
            <td className="rowNum">{counter++}</td>
          </tr>
        ))}
>>>>>>> Stashed changes
        </tbody>
      </table>
    </div>
  );
}

export default Table;