import { useState } from "react";
import TicketDetails from "./TicketBooking/TicketDetails";
import ViewTicket from "./TicketBooking/ViewTicket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [DisplayData, setDisplayData] = useState([]);

  const newAddData = (Ddata) => {
    setDisplayData([...DisplayData, Ddata]);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<ViewTicket newAddData={newAddData} Ddata={DisplayData} />}
        />
        <Route path="/ticketDetails" element={<TicketDetails />} />
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
