import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import Button from "../Body/Button";

const Header = (props) => {
  const [number, setNumber] = useState(["0"]);
  // const [prevNumber, setPrevNumber] = useState();
  // const [nextNumber, setNextNumber] = useState();
  const [result, setResult] = useState("0");

  const addNumber = (value) => {
    console.log(number);
    setNumber(String(number + value));
    setResult(value === "=" ? String(number).substring(1) : result);
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="result">{result}</div>
        <div className="number">{number}</div>
      </div>
      <div className="header-body">
        <Button onClick={addNumber} keyValue={"+/-"} />
        <Button onClick={addNumber} keyValue={"0"} />
        <Button onClick={addNumber} keyValue={"."} />
        <Button onClick={addNumber} keyValue={"="} />
        <Button onClick={addNumber} keyValue={"1"} />
        <Button onClick={addNumber} keyValue={"2"} />
        <Button onClick={addNumber} keyValue={"3"} />
        <Button onClick={addNumber} keyValue={"+"} />
        <Button onClick={addNumber} keyValue={"4"} />
        <Button onClick={addNumber} keyValue={"5"} />
        <Button onClick={addNumber} keyValue={"6"} />
        <Button onClick={addNumber} keyValue={"-"} />
        <Button onClick={addNumber} keyValue={"7"} />
        <Button onClick={addNumber} keyValue={"8"} />
        <Button onClick={addNumber} keyValue={"9"} />
        <Button onClick={addNumber} keyValue={"x"} />
        <Button onClick={addNumber} keyValue={"1/x"} />
        <Button onClick={addNumber} keyValue={"x2"} />
        <Button onClick={addNumber} keyValue={"/"} />
        <Button onClick={addNumber} keyValue={"/"} />
        <Button onClick={addNumber} keyValue={"/"} />
        <Button onClick={addNumber} keyValue={"/"} />
        <Button onClick={addNumber} keyValue={"/"} />
        <Button onClick={addNumber} keyValue={"/"} />
      </div>
    </div>
  );
};

export default Header;
