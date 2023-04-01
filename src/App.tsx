import { useEffect, useState } from "react";
import Img from "./components/Img";
import styles from "./styles.module.css";

function App() {
  interface NasaData {
    title: string;
    description: string;
    imageUrl: string;
  }
  const [nasaData, setNasaData] = useState<NasaData | false>(false);
  useEffect(() => {
    get_initial_data();
  }, []);

  const get_initial_data = async () => {
    try {
      setNasaData(
        await (
          await fetch(
            "https://api.nasa.gov/planetary/apod?api_key=wF1ZEl8L97PGCgDAszfosqPBCBrIWhCCBxCb5jbI"
          )
        ).json()
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className={`container ${styles.textCenter}`}>
      <h1>TSApod</h1>
      {nasaData && (
        <>
          <h1>{nasaData.title}</h1>
          <p>{nasaData.description}</p>
          <img src={nasaData.imageUrl} alt={nasaData.title} />
        </>
      )}
      <Img
        img_alt="Alt Text"
        source="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      ></Img>
    </main>
  );
}

export default App;
