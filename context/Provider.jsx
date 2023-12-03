import React, { useState } from "react";
import UserContext from "./userProvider";

const UserContextProvider = (props) => {
  const [User, setUser] = useState(null);
  const [ProductCount, SetProductCount] = useState(0);
  const [Cart, SetCart] = useState([1, 2, 3]);
  return (
    <UserContext.Provider
      value={{ User, setUser, ProductCount, SetProductCount, Cart, SetCart }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
