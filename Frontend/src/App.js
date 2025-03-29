import "./App.css";
import { Container } from "@mui/material";
import Feedback from "./components/Feedback";
import MiniDrawer from "./components/SideNav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import HospitalLocation from "./pages/HospitalLocation";
import FirstAid from "./pages/FirstAid";
import Counselling from "./pages/Counselling";
import NutritionPlanner from "./pages/NutritionPlanner";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <MiniDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Container>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/nutrition-planner"
                  element={<NutritionPlanner />}
                ></Route>
                <Route
                  exact
                  path="/counselling"
                  element={<Counselling />}
                ></Route>
                <Route
                  exact
                  path="/hospital-location"
                  element={<HospitalLocation />}
                ></Route>
                <Route exact path="/first-aid" element={<FirstAid />}></Route>
                <Route
                  exact
                  path="/community-platform"
                  element={<Feedback />}
                ></Route>
              </Routes>
            </Container>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
