import React from "react";
import {ListingAsteroid} from "@asteroids/asteroids";
import {WithLoading} from "../../../commons/layout";
import {List} from "../../../commons/ui";

export interface AsteroidsListProps {
  asteroidsList: ListingAsteroid[];
  itsLoading: boolean
}

export const AsteroidsList: React.FC<AsteroidsListProps> = ({asteroidsList, itsLoading}) => {
  return (
    <WithLoading itsLoading={itsLoading}>
      <List
        data={asteroidsList}
        fields={[{property: 'name', header: 'Name'}]}
        actions={[{label: " Favorite", handler: (data: any) => console.log(data)}]}
      />
    </WithLoading>
  )
}
