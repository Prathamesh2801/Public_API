import React, { useState, useEffect } from "react";
import { fetchRandomCocktail } from "../services/api";

export default function RandomCocktail() {
  const [cocktail, setCocktail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const getCocktail = async () => {
      try {
        const data = await fetchRandomCocktail();
        setCocktail(data.drinks[0]); // CocktailDB API returns drinks array
      } catch (err) {
        setError("Failed to fetch cocktail.");
      }
    };

    getCocktail();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      {cocktail ? (
        <div>
          <h1>{cocktail.strDrink}</h1>
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            style={{ width: "300px" }}
          />
          <p>{cocktail.strInstructions}</p>
          <ul>
            {Object.keys(cocktail)
              .filter((key) => key.startsWith("strIngredient") && cocktail[key])
              .map((key) => (
                <li key={key}>{cocktail[key]}</li>
              ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
