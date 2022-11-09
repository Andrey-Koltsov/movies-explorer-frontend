import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthUserContext from "../../context/AuthUserContext";

function ProtectedRoute({ component: Component, ...props }) {
  const auth = useContext(AuthUserContext);
  return (
    <Route>
      {auth ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  )
}

export default ProtectedRoute;