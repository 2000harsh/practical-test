import TicketDetails from "./TicketBooking/TicketDetails";
import ViewTicket from "./TicketBooking/ViewTicket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ViewTicket />} />
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
