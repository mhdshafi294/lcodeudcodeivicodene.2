import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import SuspensePage from "./components/suspense-page";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/products/Products"));
const OurStory = lazy(() => import("@/pages/OurStory"));
const ProductsDetail = lazy(() => import("@/pages/products/ProductDetail"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<SuspensePage Page={Home} fallback={<p>Loading..</p>} />}
        />
        <Route
          path="/rings"
          element={<SuspensePage Page={Products} fallback={<p>Loading..</p>} />}
        />
        <Route
          path="/rings/:productId"
          element={
            <SuspensePage Page={ProductsDetail} fallback={<p>Loading..</p>} />
          }
        />
        <Route
          path="/our-Story"
          element={<SuspensePage Page={OurStory} fallback={<p>Loading..</p>} />}
        />
        <Route path="/*" element={<SuspensePage Page={PageNotFound} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
