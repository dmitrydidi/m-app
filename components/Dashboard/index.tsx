import * as React from "react";
// libs
import { Marker } from "react-google-maps";
import { isEmpty, debounce } from "lodash";
// components
import Map from "components/Map";
import SearchBox from "components/SearchBox";
// hooks
import useSocket from "hooks/useSocket";
// views
import { Container } from "./views";

const Dashboard: React.FC = () => {
  const [inputValue, changeInputValue] = React.useState<string>("");
  const { cars } = useSocket();

  const onFilterChange = (value: string) => changeInputValue(value);
  const debouncedFilterChange = debounce(onFilterChange, 900);

  const markers = isEmpty(inputValue)
    ? cars.map((car) => (
        <Marker
          key={car.id}
          options={{
            position: { lat: car.lat, lng: car.lng },
            label: { text: car.name, color: "white", fontSize: "10px" },
          }}
        />
      ))
    : cars
        .filter((car) => car.name === inputValue)
        .map((car) => (
          <Marker
            key={car.id}
            options={{
              position: { lat: car.lat, lng: car.lng },
              label: { text: car.name, color: "white", fontSize: "10px" },
            }}
          />
        ));

  return (
    <Container>
      <SearchBox onChange={debouncedFilterChange} />
      <Map>{markers}</Map>
    </Container>
  );
};
export default Dashboard;
