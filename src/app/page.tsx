"use client";
import React, { useContext, useState } from "react";
import { CardList } from "@/components";
import { Modal } from "@/components";
import { FormUpdate } from "@/components/form";
import { ValidationForm } from "@/components/form/ValidationForm";
import { MyContext, MyContextProvider } from "@/Context/context";
import { SearchInput } from "@/components/form/SearchInput";
export default function Home() {
  // const { users, setUsers } = useContext(UserContext);
  // const [selectCard, setSelectCard] = useState("");

  // console.log("users", users);

  // const selectedUser = users.filter((user) => {
  //   if (user.id === selectCard) {
  //     return user;
  //   }
  // });

  // const handleDeleteCard = (id: string) => {
  //   const deleteItem = users.filter((users) => users.id !== id);
  //   setUsers(deleteItem);
  // };

  return (
    <MyContextProvider>
    <MyComponent/>
    </MyContextProvider>
  );
}


function MyComponent(){
  const {selectUser} = useContext(MyContext)

  const [search, setSearch] = useState("")


    return(
      <>
      <SearchInput setSearch={setSearch}/>
      <CardList search={search}></CardList>
      <Modal>{selectUser ? <FormUpdate /> : <ValidationForm />}</Modal>

      </>  
    )
}