import React from "react";
import { Button } from "react-bootstrap";
import filterImg from "../../assets/icons/filter.svg";

function FilterBtn() {
  return (
    <Button variant="success">
      <img src={filterImg} alt="" />
    </Button>
  );
}

export default FilterBtn;
