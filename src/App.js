import React, { useState } from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomDatePicker from "./Custom-Datepicker";

export default function App() {
  const [datepick, setDatePick] = useState(new Date());

  return (
    <div className="App">
      <h1>Custom React Datepicker Bootstrap</h1>
      <div>
        <CustomDatePicker
          wrapperClassName="datepicker"
          className="form-control"
          dateFormat="dd/MM/yyyy"
          selected={datepick}
          onChange={(date) => setDatePick(date)}
        />
      </div>
      by <a href="https://seegatesite.com">seegatesite.com</a>
    </div>
  );
}
