import { Navigate } from 'react-router-dom';
import { useAdminContext } from '../context/adminContext';

const ProtectedRoute = ({ component: Component }) => {
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
