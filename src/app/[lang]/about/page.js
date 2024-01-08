import React from "react";
import { getDictionary } from "../../../../dictionary";

async function page({ params }) {
  const lang = await getDictionary(params.lang);
  console.log(lang, "home lang");
  return (
    <div>
      <h1>{lang.MainTitle}</h1>
    </div>
  );
}

export default page;
