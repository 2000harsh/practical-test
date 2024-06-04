import TicketDetails from "./TicketBooking/TicketDetails";
import ViewTicket from "./TicketBooking/ViewTicket";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      

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
    </div>
  );
}

export default App;
