import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const loading = <div className="bg-red-400">loading....</div>;
const Main = lazy(() => import("../pages/MainComp"));
const About = lazy(() => import("../pages/AboutComp"));
const Todo = lazy(() => import("../pages/TodoComp"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/todo",
    element: (
      <Suspense fallback={loading}>
        <Todo />
      </Suspense>
    ),
  },
]);

export default root;
