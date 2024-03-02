"use client";

import React, { ReactNode } from "react";
import { useContext, useState, createContext } from "react";

// Define the type for user information
interface UserInfo {
  id: string;
  username: string;
  email: string;
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
  const [userInfo, setuserInfo] = useState([
   
  ]);

  const [selectUser, setselectUser] = useState("");

  // handle Delete Card
  const handleDelete = (id: string) => {
    const newUser = userInfo.filter((item) => item.id !== id);
    setuserInfo(newUser);
    // If the deleted card was selected, clear the selection
    if (selectUser === id) {
      setselectUser("");
    }
  };
  const updateUser = (user, selectCard: string) => {
    setuserInfo((prevUsers) => {
      return prevUsers.map((prevUser) => {
        if (prevUser.id === selectCard) {
          return {
            ...prevUser,
            ...user,
          };
        }
        return prevUser;
      });
    });
  };
    const handleFormAdd=(userInfo)=>{
    const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
        const newUser = { ...userInfo, id: newId };
        setuserInfo((prevUsers) => {
          return [...prevUsers, newUser];
        });
  }

  // handle Update

  // find selectuser
  const findUser = userInfo.find((item) => item.id === selectUser);

  // Provide the shared state and update function to the context
  const contextValue = {
    userInfo,
    handleFormAdd,
    setuserInfo,
    handleDelete,
    updateUser,
    setselectUser,
    selectUser,
    findUser,
  };

  return (
    <>
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    </>
  );
};

// Create a custom hook to consume the context
// export const useMyContext = () => useContext(MyContext);
