const fetch = require("node-fetch");

const url =
  "https://api.webflow.com/sites/63ce990e97fef71477a5e00f/collections";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization:
      "Bearer e272cc1daa696017f3c2fe2aed869f459a2cd2b10a7154d710cd3bc45dd57229",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
