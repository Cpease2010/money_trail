import React from "react";

export default function Bill(props) {
    const {id, title} = props.bill;
    let {billName, billAmount, billDate} = props.bill;
    return (
      <form style={formStyle} action="" method="post">
          <label htmlFor="billName">Bill Name:</label>
        <input
          value={billName || id}
          style={inputStyle}
          type="text"
          name="billName"
          placeholder="Who's Paid!"
        />
        <label htmlFor="billAmount">Bill Amount:</label>
        <input
          value={title || billAmount}
          style={inputStyle}
          type="text"
          name="billAmount"
          placeholder="How Much!"
        />
        <label htmlFor="billDate">Bill Date:</label>
        <input
        value={billDate}
        style={inputStyle}
        type="text"
        name="billDate"
        placeholder='When You Pay!'/>
        <div>
          <button
            type="button"
            style={{
              width: "56px",
              boxShadow:
                "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
            }}
          >
            Edit
          </button>
          <button
            type="button"
            style={{
              width: "56px",
              boxShadow:
                "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
            }}
          >
            Save
          </button>
          <button
            type="button"
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
  marginRight: "4px",
  textAlign: 'center'
};

