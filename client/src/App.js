import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddInfo from "./pages/AddInfo";
import SelectDog from "./pages/SelectedDog";
import HealthTracking from "./pages/HealthTracking";
import ActivityTraking from "./pages/ActivityTracking";
import AskExpert from "./pages/AskExpert";
import DietTraking from "./pages/DietTracking";
import HealthRecords from "./pages/HealthRecords";
import VacRecord from "./pages/VacRecord";
import AddRecord from "./pages/AddRecord";
import ViewRecord from "./pages/ViewRecords";
import ModifyRecord from "./pages/ModifyRecord";
import Appointment from "./pages/Appointments";
import Feces from "./pages/Feces";
import Sleep from "./pages/Sleep";
import Exercises from "./pages/Exercises";
import Grooming from "./pages/Grooming";
import Shower from "./pages/Shower";
import AddReminder from "./pages/AddReminders";
import Profile from "./pages/Profile";
import axios from "axios";
import HOST from "../src/localhost";
axios.defaults.withCredentials = true;

function App() {
  const [logedIn, setLogin] = React.useState(false);
  React.useEffect(() => {
    axios
      .post(HOST + "/authorize", { message: "none" })
      .then((response) => setLogin(response.data.validation))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Router>
      <Routes>
        {logedIn && <Route path="/" element={<Home />} />}
        {!logedIn && <Route path="/" element={<Login />} />}
        {!logedIn && <Route path="/signup" element={<Signup />} />}

        {logedIn && <Route path="/home" element={<Home />} />}
        {logedIn && <Route path="/signup" element={<Signup />} />}
        {logedIn && <Route path="/addInfo" element={<AddInfo />} />}
        {logedIn && <Route path="/selectDog/:obj" element={<SelectDog />} />}
        {logedIn && (
          <Route path="/healthRecords/:obj" element={<HealthRecords />} />
        )}
        {logedIn && <Route path="/askExperts" element={<AskExpert />} />}
        {logedIn && (
          <Route path="/dietTracking/:obj" element={<DietTraking />} />
        )}
        {logedIn && (
          <Route path="/activityTracking/:obj" element={<ActivityTraking />} />
        )}
        {logedIn && (
          <Route path="/healthTraking/:obj" element={<HealthTracking />} />
        )}
        {logedIn && <Route path="/vaccination/:obj" element={<VacRecord />} />}
        {logedIn && <Route path="/addVacRecord/:obj" element={<AddRecord />} />}
        {logedIn && <Route path="/editRecord" element={<ModifyRecord />} />}
        {logedIn && <Route path="/recordsView" element={<ViewRecord />} />}
        {logedIn && <Route path="/reminders/:obj" element={<Appointment />} />}
        {logedIn && (
          <Route path="/addreminder/:obj" element={<AddReminder />} />
        )}
        {logedIn && <Route path="/dietTracking" element={<DietTraking />} />}
        {logedIn && <Route path="/feces" element={<Feces />} />}
        {logedIn && <Route path="/sleep" element={<Sleep />} />}
        {logedIn && <Route path="/shower" element={<Shower />} />}
        {logedIn && <Route path="/exercise" element={<Exercises />} />}
        {logedIn && <Route path="/grooming" element={<Grooming />} />}
        {logedIn && <Route path="/" element={<Login />} />}
        {logedIn && <Route path="/profile" element={<Profile />} />}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
