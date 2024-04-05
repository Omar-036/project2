import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Test2 from "./Test2";

export default function Categories() {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchContent() {
      await axios
        .get("../../data/data.json")
        .then((res) => setContent(res.data))
        .catch((err) => {
          setError(err.message);
        });
    }
    fetchContent();
  }, []);

  return (
    <div className="h-full z-[5000] group/main">
      {/* <Test2 /> */}
      {!content ? <Test2 /> : <Test2 />}
    </div>
  );
}
