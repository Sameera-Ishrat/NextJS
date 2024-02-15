import Link from "next/link";
import Image from "next/image";
import React from "react";
import drinkImage from "./drink.jpg";
console.log(drinkImage);

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) throw new Error(`Couldn't fetch the drink`);
  const data = response.json();
  console.log(data);
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  console.log(params.id);
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  const category = data?.drinks[0]?.strCategory;
  const instructions = data?.drinks[0]?.strInstructions;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mb-8">
        Back to Drinks
      </Link>
      {/* <Image
        src={drinkImage}
        alt={title}
        className="w-48 h-48 rounded-lg mb-8"
      /> */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Image
            src={imgSrc}
            alt={title}
            width={300}
            height={300}
            className="w-48 h-48 rounded-lg mb-4 shadow-lg"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <h3 className="text-3xl">{category}</h3>
          <p className="text-1xl">{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleDrinkPage;
