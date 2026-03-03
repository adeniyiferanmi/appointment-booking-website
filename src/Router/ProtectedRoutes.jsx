import React, { use, useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const ProtectedRoutes = () => {
    const {isAuthenticated, adminData} = useContext(AuthContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const auth = await isAuthenticated();
                if (!auth) {
                    navigate("/admin-login")
                    toast.error("Please log in to access the Admin dashboard");
                    return;
                }
            } catch (error) {
                toast.error("Session expired. Please log in again.");
                navigate("/admin-login")
            }
        }
        checkAuth();
    }, [])
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedRoutes