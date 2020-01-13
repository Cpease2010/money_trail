import React, {Component} from "react";

export class Bill extends Component {
  render() {
    const {billName, billAmount, dueDate} = this.props.bill
    return (
      <form style={formStyle} action="" method="post">
        <input
          value={billName}
          style={inputStyle}
          type="text"
          name="billName"
          placeholder="Bill Name"
        />
        <input
          value={billAmount}
          style={inputStyle}
          type="text"
          name="billAmount"
          placeholder="Bill Amount"
        />
        <input 
        value={dueDate}
        style={inputStyle} 
        type="number"
        name="billDate" />
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

export default Bill;
