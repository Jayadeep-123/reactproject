import { useState } from 'react';
import '../styles/Table.css';
import { Link } from 'react-router-dom';

function DashBoard() {
  const itemsPerPage = 10; 
  const [data] = useState([
    {
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Guntur",
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
      CLASS_ID: "7654",
      RECEIPT_STATUS: "Updated",
      STATUS: "Updated",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Updated",
      END_ON: "Andhra Pradesh"
    },{
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Guntur",
      ACADEMIC_YEAR: "Grands Branch",
      CLASS_ID: "7654",
      RECEIPT_STATUS: "Updated",
      STATUS: "Updated",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Updated",
      END_ON: "Andhra Pradesh"
    },{
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Guntur",
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
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
      ACADEMIC_YEAR: "Grands Branch",
      CLASS_ID: "7654",
      RECEIPT_STATUS: "Updated",
      STATUS: "Updated",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Updated",
      END_ON: "Andhra Pradesh"
    },{
      ACADEMIC_ID: "Andhra Pradesh",
      JOIN_YEAR: "Guntur",
      ACADEMIC_YEAR: "Grands Branch",
      CLASS_ID: "7654",
      RECEIPT_STATUS: "Updated",
      STATUS: "Updated",
      FY_START_ON: "Updated",
      FY_END_ON: "Updated",
      START_ON: "Updated",
      END_ON: "Andhra Pradesh"
    },
  ]);  
  
  const [currentPage, setCurrentPage] = useState(1); 
  
  const totalPages = Math.ceil(data.length / itemsPerPage); 
  
  const startIndex = (currentPage - 1) * itemsPerPage; 
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage); 
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Fee Payment Year</h1>
        <div className="buttons">
          <button className="filter">
            <span className="icon"><svg width="14" height="12" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1V4C13.9999 4.26519 13.8946 4.51951 13.707 4.707L9 9.414V13C8.99994 13.2652 8.89455 13.5195 8.707 13.707L6.707 15.707C6.56715 15.8468 6.38898 15.942 6.19503 15.9806C6.00108 16.0192 5.80005 15.9993 5.61735 15.9237C5.43465 15.848 5.27848 15.7199 5.1686 15.5555C5.05871 15.391 5.00004 15.1978 5 15V9.414L0.293 4.707C0.105451 4.51951 5.66374e-05 4.26519 0 4V1Z" fill="#5B6871"/>
            </svg>
            </span> Filter <span className="notification">1</span>
            </button>
            <button className="export">
              <span className="icon"><svg width="14" height="12" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.293031 7.70679C0.105559 7.51926 0.000244141 7.26495 0.000244141 6.99979C0.000244141 6.73462 0.105559 6.48031 0.293031 6.29279L6.29303 0.292786C6.48056 0.105315 6.73487 0 7.00003 0C7.26519 0 7.5195 0.105315 7.70703 0.292786L13.707 6.29279C13.8892 6.48139 13.99 6.73399 13.9877 6.99619C13.9854 7.25838 13.8803 7.5092 13.6948 7.6946C13.5094 7.88001 13.2586 7.98518 12.9964 7.98746C12.7342 7.98974 12.4816 7.88894 12.293 7.70679L8.00003 3.41379V14.9998C8.00003 15.265 7.89467 15.5194 7.70714 15.7069C7.5196 15.8944 7.26525 15.9998 7.00003 15.9998C6.73481 15.9998 6.48046 15.8944 6.29292 15.7069C6.10539 15.5194 6.00003 15.265 6.00003 14.9998V3.41379L1.70703 7.70679C1.5195 7.89426 1.26519 7.99957 1.00003 7.99957C0.734866 7.99957 0.480558 7.89426 0.293031 7.70679Z" fill="#5B6871"/>
              </svg>
              </span> Export
            </button> 
           <Link to="/add">
           <button className="add-new-field" style={{ textDecoration: 'none' }}>+ Add New Field</button>           
           </Link>
         </div>
       </div>
       <hr className="narrow-hr" />
      
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
             {currentItems.map((item, index) => (
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
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 5.00033H3.16667M3.16667 5.00033H16.5M3.16667 5.00033V16.667C3.16667 17.109 3.34226 17.5329 3.65482 17.8455C3.96738 18.1581 4.39131 18.3337 4.83333 18.3337H13.1667C13.6087 18.3337 14.0326 18.1581 14.3452 17.8455C14.6577 17.5329 14.8333 17.109 14.8333 16.667V5.00033H3.16667ZM5.66667 5.00033V3.33366C5.66667 2.89163 5.84226 2.46771 6.15482 2.15515C6.46738 1.84259 6.89131 1.66699 7.33333 1.66699H10.6667C11.1087 1.66699 11.5326 1.84259 11.8452 2.15515C12.1577 2.46771 12.3333 2.89163 12.3333 3.33366V5.00033M7.33333 9.16699V14.167M10.6667 9.16699V14.167" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </button>
                  <Link to="/edit">
                    <button className="icon-btn" title="Edit">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1667 2.49993C14.3856 2.28106 14.6455 2.10744 14.9314 1.98899C15.2174 1.87054 15.5239 1.80957 15.8334 1.80957C16.1429 1.80957 16.4494 1.87054 16.7354 1.98899C17.0214 2.10744 17.2812 2.28106 17.5001 2.49993C17.719 2.7188 17.8926 2.97863 18.011 3.2646C18.1295 3.55057 18.1904 3.85706 18.1904 4.16659C18.1904 4.47612 18.1295 4.78262 18.011 5.06859C17.8926 5.35455 17.719 5.61439 17.5001 5.83326L6.25008 17.0833L1.66675 18.3333L2.91675 13.7499L14.1667 2.49993Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                  </Link>
                  <button className="icon-btn" title="View">
                  <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.8626 7.36301C15.0653 7.64701 15.1666 7.78967 15.1666 7.99967C15.1666 8.21034 15.0653 8.35234 14.8626 8.63634C13.9519 9.91367 11.6259 12.6663 8.49992 12.6663C5.37325 12.6663 3.04792 9.91301 2.13725 8.63634C1.93459 8.35234 1.83325 8.20967 1.83325 7.99967C1.83325 7.78901 1.93459 7.64701 2.13725 7.36301C3.04792 6.08567 5.37392 3.33301 8.49992 3.33301C11.6266 3.33301 13.9519 6.08634 14.8626 7.36301Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 8C10.5 7.46957 10.2893 6.96086 9.91421 6.58579C9.53914 6.21071 9.03043 6 8.5 6C7.96957 6 7.46086 6.21071 7.08579 6.58579C6.71071 6.96086 6.5 7.46957 6.5 8C6.5 8.53043 6.71071 9.03914 7.08579 9.41421C7.46086 9.78929 7.96957 10 8.5 10C9.03043 10 9.53914 9.78929 9.91421 9.41421C10.2893 9.03914 10.5 8.53043 10.5 8Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.9148 4.27273L23.5057 11.6193H23.608L26.1989 4.27273H27.3068L24.1023 13H23.0114L19.8068 4.27273H20.9148ZM28.5298 13V6.45455H29.5355V13H28.5298ZM29.0412 5.36364C28.8452 5.36364 28.6761 5.29688 28.5341 5.16335C28.3949 5.02983 28.3253 4.86932 28.3253 4.68182C28.3253 4.49432 28.3949 4.33381 28.5341 4.20028C28.6761 4.06676 28.8452 4 29.0412 4C29.2372 4 29.4048 4.06676 29.544 4.20028C29.6861 4.33381 29.7571 4.49432 29.7571 4.68182C29.7571 4.86932 29.6861 5.02983 29.544 5.16335C29.4048 5.29688 29.2372 5.36364 29.0412 5.36364ZM34.1218 13.1364C33.4911 13.1364 32.9471 12.9972 32.4897 12.7188C32.0352 12.4375 31.6843 12.0455 31.4371 11.5426C31.1928 11.0369 31.0707 10.4489 31.0707 9.77841C31.0707 9.10795 31.1928 8.51705 31.4371 8.00568C31.6843 7.49148 32.0281 7.09091 32.4684 6.80398C32.9116 6.5142 33.4286 6.36932 34.0195 6.36932C34.3604 6.36932 34.6971 6.42614 35.0295 6.53977C35.3619 6.65341 35.6644 6.83807 35.9371 7.09375C36.2099 7.34659 36.4272 7.68182 36.5891 8.09943C36.7511 8.51705 36.832 9.03125 36.832 9.64205V10.0682H31.7866V9.19886H35.8093C35.8093 8.82955 35.7354 8.5 35.5877 8.21023C35.4428 7.92045 35.2354 7.69176 34.9656 7.52415C34.6985 7.35653 34.3832 7.27273 34.0195 7.27273C33.619 7.27273 33.2724 7.37216 32.9798 7.57102C32.69 7.76705 32.467 8.02273 32.3107 8.33807C32.1545 8.65341 32.0763 8.99148 32.0763 9.35227V9.93182C32.0763 10.4261 32.1616 10.8452 32.332 11.1889C32.5053 11.5298 32.7454 11.7898 33.0522 11.9688C33.359 12.1449 33.7156 12.233 34.1218 12.233C34.386 12.233 34.6246 12.196 34.8377 12.1222C35.0536 12.0455 35.2397 11.9318 35.396 11.7812C35.5522 11.6278 35.6729 11.4375 35.7582 11.2102L36.7298 11.483C36.6275 11.8125 36.4556 12.1023 36.2141 12.3523C35.9727 12.5994 35.6744 12.7926 35.3192 12.9318C34.9641 13.0682 34.565 13.1364 34.1218 13.1364ZM39.8448 13L37.8505 6.45455H38.9073L40.3221 11.4659H40.3903L41.788 6.45455H42.8619L44.2425 11.4489H44.3107L45.7255 6.45455H46.7823L44.788 13H43.7994L42.3675 7.97159H42.2653L40.8335 13H39.8448Z" fill="#7B7B7B"/>
                  </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-container">
          <button
            className="pagination-btn left-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          
           <div className="page-numbers">
             {[...Array(totalPages).keys()].map((pageNumber) => (
               <span
                 key={pageNumber}
                 className={`page ${currentPage === pageNumber + 1 ? 'active' : ''}`}
                 onClick={() => handlePageChange(pageNumber + 1)}
              >
                 {pageNumber + 1}
              </span>
            ))}
          </div>

          <button
            className="pagination-btn right-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
 }

 export default DashBoard;


