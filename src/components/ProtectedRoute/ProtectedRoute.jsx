import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";

function ProtectedRoute({ component: Component, ...props }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <Route>
      {currentUser['_id'] ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  )
}

export default ProtectedRoute;