import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const [username, setusername] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((d) => setData(d));
  }, [username]);
  return (
    <div className="card">
      <Form setusername={setusername} />
      <UserCard data={data} />
    </div>
  );
}
