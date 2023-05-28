import { ReactElement, ReactNode, useState } from "react";
import { ColorModeContext, useMode } from "./assets/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import Topbar from "./pages/global/Topbar";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Contacts from "./pages/contacts";
import FAQuestions from "./pages/faq";
import Bar from "./pages/bar";
import Geography from "./pages/geography";
import Invoices from "./pages/invoices";
import Line from "./pages/line";
import Team from "./pages/team";
import Calendar from "./pages/calendar";
import Pie from "./pages/pie";
import SideBar from "./pages/global/Sidebar";
import Form from "./pages/form";
import Login from "./pages/login/Login";

const ProtectedRoute = () => {
  const [theme, colorMode] = useMode();
  const currentUser = true;
  return currentUser ? (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  ) : <Navigate to="/login"/>
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="" element={<Dashboard />} />
        <Route path="team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="form" element={<Form />} />
        <Route path="bar" element={<Bar />} />
        <Route path="pie" element={<Pie />} />
        <Route path="line" element={<Line />} />
        <Route path="faq" element={<FAQuestions />} />
        <Route path="geography" element={<Geography />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
};

export default App;
