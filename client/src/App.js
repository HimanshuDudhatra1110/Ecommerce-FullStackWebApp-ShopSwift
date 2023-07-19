import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AdminRoute from "./components/Routes/AdminRoute";

// lazy loading

const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Policy = lazy(() => import("./pages/Policy"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  return (
    <>
      <Suspense fallback={<p>loading....</p>}>
        <Routes>
          <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />
          <Route path={ROUTES.DASHBOARD} element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>
          <Route path={ROUTES.DASHBOARD} element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.POLICY} element={<Policy />} />
          <Route path={ROUTES.NOTFOUND} element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
