import { useState } from "react";
import Userform from "./Pracrtical/Form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Userlist from "./Pracrtical/Userlist";

function App() {
  const [submittedData, setSubmittedData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const addDate = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  const editData = (data) => {
    const updatedData = [...submittedData];
    updatedData[editingIndex] = data;
    setSubmittedData(updatedData);
    setEditingIndex(null);
  };

  const deleteData = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  };

  const setEditingUser = (index) => {
    setEditingIndex(index);
    navigate("/");
  };

  return (
    <div className="App">
      <div className="navbar">
        <nav>
          <Link className="actionlinks" to="/">
            Form
          </Link>{" "}
          <Link className="actionlinks" to="/Userlist">
            UserList
          </Link>
        </nav>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Userform
              addDate={addDate}
              editData={editData}
              initialValues={
                editingIndex !== null ? submittedData[editingIndex] : null
              }
            />
          }
        />
        <Route
          path="/Userlist"
          element={
            <Userlist
              data={submittedData}
              deleteData={deleteData}
              setEditingUser={setEditingUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
