import React from "react";
import Pagination from "react-bootstrap/Pagination";

function Paginator({ data, tableDataSetter, tableOffset }) {
  const handlePagination = (e) => {
    console.log(tableOffset, "tableOffset");
    tableDataSetter(data.slice(0, tableOffset));
  };

  return (
    <>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        {data?.map((page) => {
          <Pagination.Item active onClick={handlePagination}>
            {12}
          </Pagination.Item>;
        })}
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}

export default Paginator;
