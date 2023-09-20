import { useEffect } from "react";
import yayJpg from "../assets/yay.jpg";

export async function getAllTodos() {
  const response = await fetch(`${BASE_URL}/todos`);
  const data = await response.json();
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXX", data);
  return;
}
export default function HomePage() {
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <h2>{BASE_URL}</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
