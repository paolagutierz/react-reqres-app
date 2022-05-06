import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
