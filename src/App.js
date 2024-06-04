import { useState } from "react";
import TicketDetails from "./TicketBooking/TicketDetails";
import ViewTicket from "./TicketBooking/ViewTicket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewDetails from "./TicketBooking/ViewDetails";
import Heading from "./TicketBooking/Heading";

function App() {
  const [DisplayData, setDisplayData] = useState([]);

  const newAddData = (Ddata) => {
    setDisplayData([...DisplayData, Ddata]);
  };

  return (
    <div>
      {/* <Heading /> */}
      <Routes>
        <Route path="/" element={<ViewTicket />} />
        <Route
          path="/ticketDetails/:title"
          element={
            <TicketDetails newAddData={newAddData} Ddata={DisplayData} />
          }
        />
        <Route path="/viewDetails/:title" element={<ViewDetails />} />
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
