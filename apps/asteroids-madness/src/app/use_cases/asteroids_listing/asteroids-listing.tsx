import React, {useCallback, useEffect, useState} from "react";
import {useFetchAsteroidsListCase} from "./use_fetch_asteroids";
import {Input, useField} from "../../commons/ui/input";
import {AsteroidsList} from "./components/asteroids-list";
import {Button} from "../../commons/ui/button";
import {FetchAsteroidsRequest} from "@asteroids/asteroids";
import {Typography} from "../../commons/ui";
import {Centered, WithLoading} from "../../commons/layout";
import {useAddToFavoriteCase} from "./use_add_to_favorite";
import {useRemoveFromFavorite} from "./use_remove_from_favorite";

export const AsteroidsListing: React.FC = () => {
  const [request, setRequest] = useState<FetchAsteroidsRequest | null>(null);
  const {itsLoading, execute, asteroidsList} = useFetchAsteroidsListCase();
  const {execute: addToFavorite, itsLoading: itsLoadingAdd} = useAddToFavoriteCase();
  const {execute: removeFromFavorite, itsLoading: itsLoadingRemove} = useRemoveFromFavorite();
  const startDate = useField<string>("");
  const endDate = useField<string>("");

  const markAsFavorite = useCallback(
    (asteroid) => {
      addToFavorite(asteroid.id)
        .then(() => asteroid.itsFavorite = true);
    }, [])


  const removeFromFavoriteHandler = useCallback(
    (asteroid) => {
      removeFromFavorite(asteroid.id)
        .then(() => asteroid.itsFavorite = false);
    }, []);

  return (
    <Centered>
      <div style={{display: "flex", gap: '10px'}}>
        {/*TODO mover a componente aparte*/}
        <Input {...startDate} style={{maxWidth: '200px'}} type="date" label="Start Date"/>
        <Input {...endDate} style={{maxWidth: '200px'}} type="date" label="End Date"/>
        <Button label="Search" onClick={
          () => {
            const request = {
              startDate: new Date(startDate.value),
              endDate: new Date(endDate.value)
            };
            setRequest(request)
            execute(request)
          }
        }/>
      </div>
      {!request && <Typography text="Please select a Start Date and a End Date"/>}

      {request && <AsteroidsList
        {/*blocking request to do it one by one*/}
        blockActions={(itsLoadingAdd || itsLoadingRemove)}
        itsLoading={itsLoading}
        asteroidsList={asteroidsList}
        addToFavoriteHandler={markAsFavorite}
        removeFavoriteHandler={removeFromFavoriteHandler}
      />}

    </Centered>
  )
}
