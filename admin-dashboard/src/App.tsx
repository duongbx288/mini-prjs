import { useState } from "react";
import { ColorModeContext, useMode } from "./assets/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import Topbar from "./pages/global/Topbar";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQuestions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
