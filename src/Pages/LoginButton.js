import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button  style={{color:'white', fontSize: '15px', padding: '10px',backgroundColor:'#1976d2',border:'0',height:'35px'}} onClick={() => loginWithRedirect()}>LOGIN</button>;
};

export default LoginButton;



// style={{color:'white', fontSize: '15px', padding: '10px'}}