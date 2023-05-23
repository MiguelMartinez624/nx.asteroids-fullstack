import React from "react";
import {ListingAsteroid} from "@asteroids/asteroids";
import {WithLoading} from "../../../commons/layout";
import {List} from "../../../commons/ui";

export interface AsteroidsListProps {
  asteroidsList: ListingAsteroid[];
  itsLoading: boolean;
  addToFavoriteHandler: (asteroid: ListingAsteroid) => void;
  removeFavoriteHandler: (asteroid: ListingAsteroid) => void;
  blockActions: boolean;
}

export const AsteroidsList: React.FC<AsteroidsListProps> =
  ({
     asteroidsList,
     itsLoading,
     addToFavoriteHandler,
     removeFavoriteHandler,
     blockActions
   }) => {
    return (
      <WithLoading itsLoading={itsLoading}>
        <List
          data={asteroidsList}
          fields={[{property: 'name', header: 'Name'}]}
          actions={[{
            resolveLabel: (item: ListingAsteroid) => item.itsFavorite ? "Remove Favorite" : "Favorite",
            resolveHandler: (item: ListingAsteroid) => item.itsFavorite ? removeFavoriteHandler : addToFavoriteHandler
          }]}
          blockActions={blockActions}
        />
      </WithLoading>
    )
  }
