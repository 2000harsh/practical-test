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
        <Route path="/" element={<ViewTicket />} />
        <Route
          path="/ticketDetails"
          element={
            <TicketDetails newAddData={newAddData} Ddata={DisplayData} />
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
