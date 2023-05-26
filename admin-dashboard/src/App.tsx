import { useState } from "react";
import { ColorModeContext, useMode } from "./assets/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard/Dashboard";
import Topbar from "./pages/global/Topbar";
import { Form, Route, Routes } from "react-router-dom";
import Sidebar from "./pages/global/Sidebar";
import Contacts from "./pages/contacts/Contacts";
import FAQuestions from "./pages/faq/FAQ";
import Bar from "./pages/bar/Bar";
import Geography from "./pages/geography/Geography";
import Invoices from "./pages/invoices/Invoices";
import Line from "./pages/line/Line";
import Team from "./pages/team/Team";
import Calendar from "./pages/calendar/Calendar";
import Pie from "./pages/pie/Pie";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Sidebar/>
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
