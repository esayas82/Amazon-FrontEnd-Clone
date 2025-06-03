import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from './../DataProvider/DataProvider';


const ProtectedRoute = ({ children ,msg,redirect}) => {

    const navigate = useNavigate();
    const [{ user }, dispatch] = useContext(DataContext);
    
    useEffect(() => {
if (!user) {
        // User is not authenticated, redirect to login page
        
    navigate("/auth", {state:{msg, redirect}});
      }

    }, [user]);








  return (
    children
  )
}

export default ProtectedRoute
