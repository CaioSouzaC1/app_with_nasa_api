import { useEffect, useState } from "react";
import Img from "./components/Img";
import styles from "./styles.module.css";

function App() {
  interface NasaData {
    copyright: string;
    date: string;
    explanation: string;
    title: string;
    url: string;
  }
  const [nasaData, setNasaData] = useState<NasaData | false>(false);
  useEffect(() => {
    get_initial_data();
  }, []);

  const get_initial_data = async () => {
    try {
      const response = await (
        await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=wF1ZEl8L97PGCgDAszfosqPBCBrIWhCCBxCb5jbI"
        )
      ).json();
      console.log(response);

      setNasaData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className={`container ${styles.textCenter}`}>
      <h1>TSApod</h1>
      {nasaData && (
        <>
          <h2>{nasaData.title}</h2>
          <p>{nasaData.explanation}</p>
          <Img img_alt={nasaData.title} source={nasaData.url} />{" "}
        </>
      )}
    </main>
  );
}

export default App;
