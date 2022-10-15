// making a custom hook for it making a function first
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [ispending, setpending] = useState(true);

  const [error, seterror] = useState(null);

  const [data, setdata] = useState(null);

  useEffect(() => {
    //  every time rerendering rerendering  occurs this function runs like when we start our website and then when the state of data is changed
    setTimeout(() => {
      fetch(url) // we can use dependency array to check when we want the function to run
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to fetch the data");
          } else return res.json();
        })
        .then((data) => {
          console.log(data);
          setdata(data); // we are not returning data rather we are changing state of data
          setpending(false);
        })
        .catch((err) => {
          console.log(err.message);
          seterror(err.message);
        });
    }, 1000);
  }, [url]); // we have added dependency array so infinite loop is not happening otherwise it would have happened if we add set state in this function
  // url is being setted as dependency whenever url changes this function runs again

  return { data, error, ispending };
};

export default useFetch;
