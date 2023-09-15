import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Form1 from "./component/Form1";
import Form2 from "./component/Form2";
import Terms from "./component/Terms";
import HorizontalNonLinearStepper from "./component/HorizontalLinearStepper";
import { UserProvider } from "./utils/UserContext";
import { UserDetailsProvider } from "./utils/UserDetailsContext";
import UserTable from "./component/UserTable";

function App() {
  return (
    <Router>
      <UserProvider>
        <UserDetailsProvider>
          <div className="App">
            <div>
              <Routes>
                <Route path="/" element={<HorizontalNonLinearStepper />} />
                <Route path="/login" element={<Form1 />} />
                <Route path="/details" element={<Form2 />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/table" element={<UserTable />} />
              </Routes>
            </div>
          </div>
        </UserDetailsProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
