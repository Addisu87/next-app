import React from "react";
import "server-only";

// data fetching function

const getData = async () => {
  const res = await fetch("https://external-service.com/data", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });

  return res.json();
};

export default getData;
