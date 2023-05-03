const fetch = require("node-fetch");

const url =
  "https://api.webflow.com/collections/64400178b7e55bbe894b5545/items";
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    authorization:
      "Bearer e272cc1daa696017f3c2fe2aed869f459a2cd2b10a7154d710cd3bc45dd57229",
  },
  body: JSON.stringify({
    fields: {
      slug: "uploading-pdf",
      name: "Uploading PDF",
      _archived: false,
      _draft: false,
      pdf: "https://www.jcra.je/media/598695/public-views-sought-on-grocery-shopping-in-jersey.pdf",
    },
  }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
