import DrinksList from "@/components/DrinksList";
import React from "react";
const fetchDrinks = async() => {
  await new Promise((resolve) => {setTimeout(resolve,1000)}); // just for demo purposes
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
  if(!response.ok) {
    throw new Error("Failed to fetch the data");
  }

  const data = await response.json();
  console.log(data,"DATA");
  return data;
}

const Drinks = async() => {
const data = await fetchDrinks();
  return <div className="text-7xl">
    <DrinksList drinks={data.drinks} />
  </div>;
};

export default Drinks;
