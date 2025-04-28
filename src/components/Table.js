import { useState } from 'react';
import '../styles/Table.css';

function DashBoard() {
  const [data, setData] = useState([
    {
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Guntur",
      ACADEMIC_YEAR: "Gardens Branch",
      CLASS_ID: "7654",
      RECEIPT_STATUS: "Updated",
      STATUS: "Updated",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Updated",
      END_ON: "Andhra Pradesh"
    },
    {
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Guntur",
      ACADEMIC_YEAR: "Gardens Branch",
      CLASS_ID: "7654",
      RECEIPT_STATUS: "Updated",
      STATUS: "Updated",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Updated",
      END_ON: "Andhra Pradesh"
    },
    {
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Vijayawada",
      ACADEMIC_YEAR: "BenzCircle Branch",
      CLASS_ID: "8765",
      RECEIPT_STATUS: "Pending",
      STATUS: "Pending",
      FY_START_ON: "Pending",
      FY_END_ON: "Pending",
      START_ON: "Pending",
      END_ON: "Andhra Pradesh"
    },
    {
      ACADEMIC_ID: "Karnataka",
      JOIN_YEAR: "Bangalore",
      ACADEMIC_YEAR: "Central Branch",
      CLASS_ID: "9876",
      RECEIPT_STATUS: "Updated",
      STATUS: "Updated",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Updated",
      END_ON: "Karnataka"
    }
  ]);

  const handleAddNewField = () => {
    const newField = {
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Eluru",
      ACADEMIC_YEAR: "Eluru Branch",
      CLASS_ID: "9875",
      RECEIPT_STATUS: "Updated",
      STATUS: "Pending",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Pending",
      END_ON: "Andhra Pradesh"
    };
    setData(prevData => [...prevData, newField]);
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="header">
          <h1>Fee Payment Year</h1>
          <div className="buttons">
            <button className="filter">
              <span className="icon">🔍</span> Filter <span className="notification">0</span>
            </button>
            <button className="export">
              <span className="icon">⬆️</span> Export
            </button>
            <button className="add-new-field" onClick={handleAddNewField}>+ Add New Field</button>
          </div>
        </div>
        <hr className="narrow-hr" />

        {/* table data */}
        <div className="table-scroll-container">
          <table className="city-table">
            <thead className="headings">
              <tr id="table-tr">
                <th><input type="checkbox" /></th>
                <th>ACADEMIC ID</th>
                <th>JOIN YEAR</th>
                <th>ACADEMIC YEAR</th>
                <th>CLASS ID</th>
                <th>RECEIPT STATUS</th>
                <th>STATUS</th>
                <th>FY START ON</th>
                <th>FY END ON</th>
                <th>START ON</th>
                <th>END ON</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="values-styling">
              {data.map((item, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{item.ACADEMIC_ID}</td>
                  <td>{item.JOIN_YEAR}</td>
                  <td>{item.ACADEMIC_YEAR}</td>
                  <td>{item.CLASS_ID}</td>
                  <td>{item.RECEIPT_STATUS}</td>
                  <td>{item.STATUS}</td>
                  <td>{item.FY_START_ON}</td>
                  <td>{item.FY_END_ON}</td>
                  <td>{item.START_ON}</td>
                  <td>{item.END_ON}</td>
                  <td>
                    <button className="icon-btn" title="Delete">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="icon-btn" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="icon-btn" title="View">
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination-container">
            <button className="pagination-btn left-btn">← Previous</button>
            <div className="page-numbers">
              <span className="page active">1</span>
              <span className="page">2</span>
              <span className="page">3</span>
              <span className="dots">...</span>
              <span className="page">8</span>
              <span className="page">9</span>
              <span className="page">10</span>
            </div>
            <button className="pagination-btn right-btn">Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
