// custom hook
import React, { useEffect, useState } from "react";
import apiclient from "../utils/api-client";
const useData = (url, config, deps) => {
  const [data, setData] = useState(null);
  const [error, seterror] = useState("");
  const [isloading, setisloading] = useState(false);
  useEffect(
    () => {
      setisloading(true);
      apiclient
        .get(url, config)
        .then((res) => {
          setData(res.data);
          setisloading(false);
        })
        .catch((err) => {
          seterror(err.message);
          setisloading(false);
        });
    },
    deps ? deps : []
  );
  return { data, error, isloading };
};

export default useData;
