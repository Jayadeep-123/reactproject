import '../styles/AddNewFiels.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import { Link } from 'react-router-dom';

function EditField() {
    return (
        <>
          <Sidebar />
            <Topbar />
            <div className="new-field-container1">
                <div className="popup1">
                    <div className="header1">
                        <h2>Add New Field</h2>
                        <Link to='/dashboard'><button className="close-btn1">&times;</button></Link>
                    </div>

                    <div className="form-row1">
                        <div className="form-group smalll">
                            <label>Acadamic ID</label>
                            <input type="text" />
                        </div>
                        <div className="form-group smalll">
                            <label>Join Year</label>
                            <input type="text" />
                        </div>
                        <div className="form-group big1">
                            <label>Acadamic Year</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group smalll">
                            <label>Class ID</label>
                            <input type="text"  />
                        </div>
                        <div className="form-group smalll">
                            <label>Receipt Status</label>
                            <input type="text"  />
                        </div>
                        <div className="form-group big1">
                            <label>Status</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group big1">
                            <label>Fy Start On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group big1">
                            <label>Fy End On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group big1">
                            <label>Start On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group big1">
                            <label>End On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="button-group1">
                        <Link to ='/dashboard'>
                        <button className="delete-btnn">Cancel</button></Link>
                        <button className="edit-btnn">Add Field</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditField;