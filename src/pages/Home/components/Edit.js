import React, { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (prevDate) {
      return [{ id: v4(), note, date, time }, ...prevDate ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>事件:</p>
      <input value={note} onChange={noteChange}></input>
      <p>日期:</p>
      <input value={date} onChange={dateChange} type="date"></input>
      <p>時間:</p>
      <input value={time} onChange={timeChange} type="time"></input>
      <button onClick={addItem}>送出</button>
    </div>
  );
};

export default Edit;
