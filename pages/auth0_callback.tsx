import React, { useEffect } from "react";

import { useAuth } from "use-auth0";
import { makeStyles } from "@material-ui/core/styles";
import { RocketMan } from "components/RocketMan";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    height: "100vh"
  }
}));
const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();
  useEffect(() => {
    //se quiser passar um objeto abaixo para encaminahr o usuário para uma nova página: { postLoginRoute: "/account" }
    handleAuthentication({ postLoginRoute: "/account" });
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RocketMan />
    </div>
  );
};

export default Auth0CallbackPage;
