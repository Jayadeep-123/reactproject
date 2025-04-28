import '../styles/ViewModal.css';
import Sidebar from './sidebar';
import Topbar from './topbar';

function EditField() {
    return (
        <>
          <Sidebar />
            <Topbar />
            <div className="new-field-container">
                <div className="popup">
                    <div className="header">
                        <h2>View</h2>
                        <button className="close-btn">&times;</button>
                    </div>

                    <div className="form-row">
                        <div className="form-group small">
                            <label>Acadamic ID</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group small">
                            <label>Join Year</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group big">
                            <label>Acadamic Year</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group small">
                            <label>Class ID</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group small">
                            <label>Receipt Status</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group big">
                            <label>Status</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group big">
                            <label>Fy Start On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group big">
                            <label>Fy End On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group big">
                            <label>Start On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                        <div className="form-group big">
                            <label>End On</label>
                            <input type="text" placeholder="Enter Value" />
                        </div>
                    </div>

                    <div className="button-group">
                        <button className="delete-btn">Delete</button>
                        <button className="edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditField;
