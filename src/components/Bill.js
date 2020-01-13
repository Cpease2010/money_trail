import React from "react";

function Bill() {
  return (
    <form style={formStyle} action="" method="post">
      <input
        style={inputStyle}
        type="text"
        name="billName"
        placeholder="Bill Name"
      />
      <input
        style={inputStyle}
        type="text"
        name="billAmount"
        placeholder="Bill Amount"
      />
      <input 
      style={inputStyle} 
      type="date" 
      name="billDate" />
      <div>
        <button
          type="submit"
          style={{
            width: "56px",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
          }}
        >
          Edit
        </button>
        <button
          type="submit"
          style={{
            width: "56px",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
          }}
        >
          Save
        </button>
        <button
          type="submit"
          style={{
            width: "56px",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
          }}
        >
          Delete
        </button>
      </div>
    </form>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  height: "25vh",
  width: "10vw",
  justifyContent: "space-evenly",
  alignItems: "center",
  border: "1px solid black",
  margin: "12px"
};

const inputStyle = {
  border: "1px solid black",
  height: "32px",
  width: "120px",
  marginLeft: "4px",
  marginRight: "4px"
};

export default Bill;
