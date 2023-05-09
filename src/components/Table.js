import React, { useState, useEffect } from "react";
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
  return (
    <div >
      <table>
        <thead>
          <tr>
            {props.columns.map((element) =>{
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
        </tbody>
      </table>
    </div>
  );
}

export default Table;