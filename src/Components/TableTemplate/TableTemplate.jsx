import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import "./TableTemplate.scss";

import invertedTriangle from "../../assets/icons/inverted-triangle.svg";
import triangleImg from "../../assets/icons/triangle.svg";
import filterImg from "../../assets/icons/filter.svg";

import RowsBtn from "./RowsBtn";
import FilterBtn from "./FilterBtn";
import Paginator from "./Paginator";

import { Button, Form } from "react-bootstrap";

import mock from "../../mock";

const roundNumbers = (num) => {
  return Math.abs(Math.round((num + Number.EPSILON) * 100) / 100);
};

function TableTemplate() {
  const [rowCount, setRowCount] = useState(5);
  const data = mock.data.cryptoCurrencyList;
  const [tableData, setTableData] = useState(data);
  const [tableOffset, setTableOffset] = useState(10);
  const handlePagination = (e) => {
    console.log(tableOffset, "tableOffset");
    setTableData(data.slice(0, tableOffset));
  };
  return (
    <>
      <div className="crypto-controls">
        <div className="d-flex justify-content-between align-items-center mx-4">
          <div className="d-flex my-4 justify-content-end">
            <RowsBtn name={`Rows ${rowCount}`} rowSetter={setRowCount} />
            <Button variant="success" className="genericBtn">
              Portfolio
            </Button>
            <Button variant="success" className="genericBtn">
              Cryptocurrencies
            </Button>
            <Button variant="success" className="genericBtn">
              NFT
            </Button>
            <Button variant="success" className="genericBtn">
              Yield Farming
            </Button>
            <FilterBtn />
          </div>
          <div className="d-flex  my-4 justify-content-end">
            <Button variant="success" className="genericBtn">
              Login
            </Button>
            <Button variant="success" className="genericBtn">
              Sign Up
            </Button>
            <Form.Control
              type="text"
              placeholder="Search"
              className="search-bar"
            />
          </div>
        </div>
      </div>
      <div className="responsive-table">
        <Table className="react-bootstrap-table">
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
              <th>Circulation Supply</th>
              <th>Last week</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((coin, index) => {
              return (
                <tr key={`dt_${index}`}>
                  <td>
                    <img
                      src="https://image.flaticon.com/icons/png/512/149/149220.png"
                      style={{ height: "16px" }}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                      style={{ height: "40px" }}
                    />
                    <span className="ml-3 font-weight-semi-bold">
                      {coin.name}
                    </span>
                  </td>
                  <td className="font-weight-semi-bold">
                    ${roundNumbers(coin.quotes[2].price)}
                  </td>
                  <td
                    className={
                      coin.quotes[2].percentChange24h < 0
                        ? "losingColor"
                        : "gainingColor"
                    }
                  >
                    <span className="center-y">
                      {coin.quotes[2].percentChange24h < 0 ? (
                        <span className="losingColor">
                          <img
                            src={invertedTriangle}
                            className="invertedTriangleCls"
                          />
                        </span>
                      ) : (
                        <span className="gainingColor">
                          <img src={triangleImg} className="triangleCls" />
                        </span>
                      )}
                      <span>
                        {roundNumbers(coin.quotes[2].percentChange24h)}%
                      </span>
                    </span>
                  </td>
                  <td
                    className={
                      coin.quotes[2].percentChange7d < 0
                        ? "losingColor"
                        : "gainingColor"
                    }
                  >
                    <span className="center-y">
                      {coin.quotes[2].percentChange7d < 0 ? (
                        <span className="losingColor">
                          <img
                            src={invertedTriangle}
                            className="invertedTriangleCls"
                          />
                        </span>
                      ) : (
                        <span className="gainingColor">
                          <img src={triangleImg} className="triangleCls" />
                        </span>
                      )}
                      <span>
                        {roundNumbers(coin.quotes[2].percentChange7d)}%
                      </span>
                    </span>
                  </td>
                  <td>$ {roundNumbers(coin.quotes[2].marketCap)}</td>
                  <td>{roundNumbers(coin.quotes[2].volume24h)}</td>
                  <td>{roundNumbers(coin.circulatingSupply)}</td>
                  <td>
                    <img
                      src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${coin.id}.png`}
                      alt="coin-chart"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* <Paginator
          data={mockdata}
          tableDataSetter={setTableData}
          tableOffset={tableOffset}
        /> */}
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          {tableData?.map((page) => {
            <Pagination.Item active onClick={handlePagination}>
              {12}
            </Pagination.Item>;
          })}
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
}

export default TableTemplate;
