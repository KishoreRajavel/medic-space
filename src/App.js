import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/LogIn/LogIn";
import Total from "./components/Total/Total";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <>
      <div className="orientation">Please turn you device to Landscape</div>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/Login/*" element={<Login />} />
            <Route
              path="/Total/*"
              element={
                <ProtectedRoute>
                  <Total />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
