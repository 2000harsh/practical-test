import { useState } from "react";
import Userform from "./Pracrtical/Form";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Userlist from "./Pracrtical/Userlist";

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  const addDate = (data) => {
    setSubmittedData([...submittedData, data]);
  };
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Form</Link> | <Link to="Userlist">UserList</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Userform addDate={addDate} />}></Route>
          <Route
            path="Userlist"
            element={<Userlist data={submittedData} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
