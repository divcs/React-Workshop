import axios from "axios";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";
import { User } from "./pages/User";

export const App = () => {
  const [userAllData, setUserAllData] = useState([]);
  const MyData = async () => {
    const userData = await axios.get("https://reqres.in/api/users");
    console.log(userData.data.data);
    setUserAllData(userData.data.data);
  };

  useEffect(() => {
    MyData();
  }, []);

  return (
    <>
      <User userAllData={userAllData}/>
    </>
  );
};
