import CalendarHome from "./mini-calendar/Calendar-Home";
import Calendar from "./calendar/index";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/mini-calendar",
    element: <CalendarHome />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
