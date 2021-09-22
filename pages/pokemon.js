import React from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client";

const Pokemon = ({ pokemon }) => {
  return (
    <>
      {pokemon.map((poke) => (
        <p>{poke.name}</p>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allPokemon {
          name
        }
      }
    `,
  });

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
}

export default Pokemon;
