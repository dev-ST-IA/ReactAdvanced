import { useState, useEffect } from "react";
import "./index.css";

function UseEffect1() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("Resource Changed");
    };
  }, [resourceType]);

  return (
    <>
      <div className="simple">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1 style={{ textAlign: "center" }}>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default UseEffect1;
