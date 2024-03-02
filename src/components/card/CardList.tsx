import React, { useContext, useState } from "react";
import { Card } from "./Card";
import {  MyContext } from "@/Context/context";

const CardList = ({search}) => {
  const {userInfo,setselectUser ,selectUser,handleDelete} = useContext(MyContext)
  return (
    
    <><div>
      
      {userInfo.filter(item =>{
        return search.trim() === "" ?
        item : item.username.toLowerCase().includes(search.toLowerCase())
      }).map((item, index) => (
        <Card
          id={item.id}
          name={item.username}
          key={item.id || index}
          image={item.profile}
          selectCard={selectUser}
          onSelectCard={setselectUser}
          onDeleteCard={handleDelete}
        ></Card>
      ))}
      
    </div>
    
    </>
    
  );
};

export { CardList };
