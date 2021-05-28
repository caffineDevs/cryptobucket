import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function RowsBtn({ name, rowSetter }) {
  const handleSetRows = (e) => {
    rowSetter(e);
  };
  return (
    <>
      <DropdownButton
        onSelect={handleSetRows}
        className="mr-3"
        variant="success"
        title={name}
      >
        <Dropdown.Item eventKey="5">5</Dropdown.Item>
        <Dropdown.Item eventKey="10">10</Dropdown.Item>
        <Dropdown.Item eventKey="15">15</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default RowsBtn;
