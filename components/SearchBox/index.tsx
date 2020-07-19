import * as React from "react";
// views
import { TextField, Wrapper } from "./views";

const SearchBox: React.FC = () => {
  return (
    <Wrapper>
      <TextField type="text" placeholder="Filter Cars By Name" />
    </Wrapper>
  );
};

export default SearchBox;
