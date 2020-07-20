import * as React from "react";
// libs
import openSocket from "socket.io-client";
// types
import { ICar } from "interfaces";

const socket = openSocket("http://localhost:4000");

export default function useSocket() {
  const [cars, setCars] = React.useState<ICar[]>([]);
  const [isLoadedInitialCars, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    loadOrUpdateCars();
  }, [isLoadedInitialCars]);

  const findIndexAndUpdate = (newData: ICar) => {
    const newElementIndex = cars.findIndex((car) => car.id === newData.id);
    const newCars = [...cars];
    newCars[newElementIndex] = {
      ...newCars[newElementIndex],
      lat: newData.lat,
      lng: newData.lng,
    };
    setCars(newCars);
  }

  function loadOrUpdateCars() {
    if (!isLoadedInitialCars) {
      socket.on("cars", (data: ICar[]) => {
        setCars(data);
        setLoading(true);
      })
    } else {
      socket.on("carPositionUpdated", (newData: ICar) => {
        findIndexAndUpdate(newData)
      });
    }
  }

  return { cars };
}
