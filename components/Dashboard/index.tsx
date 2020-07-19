import * as React from "react";
// libs
import openSocket from "socket.io-client";
import { Marker } from "react-google-maps";
// components
import Map from "components/Map";
import SearchBox from "components/SearchBox";
// views
import { Container } from "./views";
// interfaces
import { ICar } from "interfaces";

const socket = openSocket("http://localhost:4000");

const Dashboard: React.FC = () => {
  const [cars, setCars] = React.useState<ICar[]>([]);
  const [isLoadedInitialCars, setLoading] = React.useState<boolean>(false);

  const loadCars = () => {
    if (!isLoadedInitialCars) {
      socket.on("cars", (data: ICar[]) => {
        setCars(data);
        setLoading(true);
      });
    } else {
      socket.on("carPositionUpdated", (newData: ICar) => {
        const newElementIndex = cars.findIndex((car) => car.id === newData.id);
        const newCars = [...cars];
        newCars[newElementIndex] = {
          ...newCars[newElementIndex],
          lat: newData.lat,
          lng: newData.lng,
        };
        setCars(newCars);
      });
    }
  };
  React.useEffect(() => {
    loadCars();
  }, [isLoadedInitialCars]);

  const markers = cars.map((car) => (
    <Marker
      options={{
        position: { lat: car.lat, lng: car.lng },
        label: { text: car.name, color: "white", fontSize: "10px" },
      }}
    />
  ));

  return (
    <Container>
      <SearchBox />
      <Map >
        {markers}
      </Map>
    </Container>
  );
};
export default Dashboard;
