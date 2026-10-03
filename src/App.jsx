import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import MyEvents from "./pages/MyEvents";
import RegisteredEvents from "./pages/RegisteredEvents";
import SavedEvents from "./pages/SavedEvents";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./App.css";

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />

      <main className="app-main">
        <div className="page-transition" key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/events" element={<Events />} />

            <Route
              path="/events/:id"
              element={<EventDetails />}
            />

            <Route path="/my-events" element={<MyEvents />}>
              <Route
                path="registered"
                element={<RegisteredEvents />}
              />

              <Route
                path="saved"
                element={<SavedEvents />}
              />
            </Route>

            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;