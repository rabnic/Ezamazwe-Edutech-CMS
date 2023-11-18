import { Navigate } from 'react-router-dom';
import { useAdminContext } from '../context/adminContext';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
    const { admin } = useAdminContext();

    return (
        <>
            {
                admin.passwordChanged ? (
                    <Component />
                ) : (
                    <Navigate to="/admin-profile" replace />
                )
            }
        </>
    );
};

export default ProtectedRoute;
