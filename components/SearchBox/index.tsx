import * as React from "react";
// views
import { TextField, Wrapper } from "./views";

interface IIncomingProps {
  onChange: (value: string) => void;
}
const SearchBox: React.FC<IIncomingProps> = ({ onChange }) => {
  return (
    <Wrapper>
      <TextField
        type="text"
        onChange={({ target: { value } }) => onChange(value)}
        placeholder="Enter Car Name"
      />
    </Wrapper>
  );
};

export default SearchBox;
