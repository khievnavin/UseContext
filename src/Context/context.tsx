"use client";

import React, { ReactNode, useEffect } from "react";
import {  useState, createContext } from "react"; 
import { getLocalStorage, setLocalStorage } from "@/utils/LocalStorage";


// Define the type for user information
interface UserInfo {
  id: string;
  username: string;
  profile: string;
}

// Create a context with a default value
export const MyContext = createContext<{
  userInfo: UserInfo[];
  setuserInfo: React.Dispatch<React.SetStateAction<UserInfo[]>>;

  handleDelete: (id: string) => void;

  selectUser: string;
  setselectUser: React.Dispatch<React.SetStateAction<string>>;

  findUser: UserInfo | undefined;
}>({
  userInfo: [],
  setuserInfo: () => {}, // Provide a default value

  handleDelete: () => {}, // Provide a default value

  setselectUser: () => {}, // Provide a default value
  selectUser: "",

  findUser: undefined,
});

interface MyContextProps {
  children: ReactNode;
}

// create a provider component
export const MyContextProvider: React.FC<MyContextProps> = ({ children }) => {
  // store state
  const [userInfo, setuserInfo] = useState([]);

  const [selectUser, setselectUser] = useState("");

  // handle Delete Card
  const handleDelete = (id: string) => {
    const newUser = userInfo.filter((user) => user.id !== id);
    setLocalStorage("userInfo" , newUser)
    setuserInfo(newUser);

    // If the deleted card was selected, clear the selection
    // if (selectUser === id) {
    //   setselectUser("");
    // }
  };
  // const clearAllUsers =() => {
  //   setLocalStorage("userInfo", [])
  //   setuserInfo([])
  // }
  const updateUser = (user, selectCard: string) => {
    const newUser = userInfo.map((userInfo)=> {
      if (userInfo.id === selectCard){
        return {
           ...userInfo,
           ...user,
        };
      }
      return userInfo;
    });
    setLocalStorage("userInfo", newUser);
    setuserInfo(newUser);

    // setuserInfo((prevUsers) => {
    //   return prevUsers.map((prevUser) => {
    //     if (prevUser.id === selectCard) {
    //       return {
    //         ...prevUsers,
    //         ...user
    //       };
    //     }
    //     return prevUser;
    //   });
    
    // });
  };
    const handleFormAdd=(userInfo : any)=>{
    const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
        const newUser = { ...userInfo, id: newId };
        setuserInfo((prevUsers) => {
          const newAllUsers = [...prevUsers,newUser]
          setLocalStorage("userInfor", newAllUsers)
          return newAllUsers;
        });
        
  };

  // handle Update

  // find selectuser
  const findUser = userInfo.find((item) => item.id === selectUser); 

  useEffect(() => {
    const userStorage = getLocalStorage("userInfor") ? getLocalStorage("userInfor") : [];
    setuserInfo(userStorage);
  }, []);
  // Provide the shared state and update function to the context
  const contextValue = {
    userInfo,
    handleFormAdd,
    setuserInfo,
    handleDelete,
    updateUser,
    setselectUser,
    // clearAllUsers,
    selectUser,
    findUser,
  };

  return (
    <>
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    </>
  );
};

// export const useMyContext = () => useContext(MyContext);
