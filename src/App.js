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
import NewForm from "./Pracrtical/NewForm";

function App() {
  const [submittedData, setSubmittedData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [DisplayData, setDisplayData] = useState([]);
  const navigate = useNavigate();

  const newAddData = (Ddata) => {
    setDisplayData([...DisplayData, Ddata]);
  };

  const updateData = (index, newData) => {
    const updatedData = DisplayData.map((item, i) =>
      i === index ? newData : item
    );
    setDisplayData(updatedData);
  };

  console.log("DisplayData", DisplayData);

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
          path="/1"
          element={
            <NewForm
              newAddData={newAddData}
              Ddata={DisplayData}
              updateData={updateData}
            />
          }
        />
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
