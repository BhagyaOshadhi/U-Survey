import React from "react";
import { useState } from "@hookstate/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

export const UserInfo = () => {
  const action = useState("");
  const borrwerName = useState("");
  const bankName = useState("");
  const principle = useState(0);
  const interest = useState(0);
  const term = useState(0);
  const numberOfYears = useState(0);
  const inputString = useState("LOAN IDIDI Dale 10000 5 4");

  const loanAction = () => {
    console.log("loannn");
    return (
      <div>
        <label>Please Enter the followings</label>
        <br />
        <TextField
          label="Bank name"
          variant="filled"
          onChange={(e) => {
            bankName.set(e.target.value);
          }}
        />
        <br />
        <TextField
          label="Borrower name"
          variant="filled"
          onChange={(e) => {
            borrwerName.set(e.target.value);
          }}
        />
        <br />
        <TextField
          label="Principle"
          variant="filled"
          onChange={(e) => {
            principle.set(e.target.value);
          }}
        />
        <br />
        <TextField
          label="Interest"
          variant="filled"
          onChange={(e) => {
            interest.set(e.target.value);
          }}
        />
        <br />
        <TextField
          label="No of Years"
          variant="filled"
          onChange={(e) => {
            numberOfYears.set(e.target.value);
          }}
        />
        <br />
        <TextField
          label="term"
          variant="filled"
          onChange={(e) => {
            term.set(e.target.value);
          }}
        />
        <br />
        <Divider />
        <br />
        <label>
          amount you have paid to the bank :
          {principle.get() +
            (principle.get() * numberOfYears.get() * interest.get()) / 100}
        </label>
        <br />
        <label> No of remaining EMIs: {} </label>
      </div>
    );
  };
  const paymentAction = () => {
    return (
      <>
        <label>payment action</label>
      </>
    );
  };
  const balanceAction = () => {
    return (
      <>
        <label>balance action</label>
      </>
    );
  };
  const perfermedSelectedAction = () => {
    switch (action.get()) {
      case "loan":
        return loanAction();
        break;
      case "payment":
        return paymentAction();
        break;
      case "balance":
        return balanceAction();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <form>
          <label> Please Select Your Services</label>
          <br />
          <Button
            variant="contained"
            onClick={() => {
              action.set("loan");
            }}
          >
            LOAN
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              action.set("payment");
            }}
          >
            PAYMENT
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              action.set("balance");
            }}
          >
            BALANCE
          </Button>
          <br />
          {perfermedSelectedAction()}
        </form>
      </div>
    </>
  );
};
