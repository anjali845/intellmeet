import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import MeetingRoom from "../pages/MeetingRoom/MeetingRoom";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth pages share the split-screen AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Authenticated app pages share the sidebar + navbar MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* The meeting room is full-screen and intentionally has no layout chrome */}
      <Route path="/meeting/:id" element={<MeetingRoom />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;