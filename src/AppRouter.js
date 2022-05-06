import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
