import { Navigate } from 'react-router-dom';

function NotFoundRedirect() {
    return <Navigate to="/" replace />;
}

export default NotFoundRedirect;
