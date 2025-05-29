import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

// Páginas existentes
import LoginViaEmail from "./pages/Login/LoginViaEmail";
import LoginViaCode from "./pages/Login/LoginViaCode";
import Loading from "./pages/Loading";
import Welcome from "./pages/Welcome";
import LoggedArea from "./pages/LoggedArea";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import MyAgenda from "./pages/MyAgenda";
import UserProfile from "./pages/UserProfile";
import QRScanner from "./pages/QRScanner";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <UserProvider>
      <Routes>
        {/* Fluxo de Login */}
        <Route path="/" element={<LoginViaEmail />} />
        <Route path="/login-code" element={<LoginViaCode />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/welcome" element={<Welcome />} />
        
        {/* Dashboard Principal */}
        <Route path="/home" element={<LoggedArea />} />
        
        {/* Funcionalidades */}
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/my-agenda" element={<MyAgenda />} />
        <Route path="/qr-scanner" element={<QRScanner />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </UserProvider>
  );
}

export default App;