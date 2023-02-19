import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <p>
      Page is not found. Go <Link to="/">Home</Link>
    </p>
  );
};

export default NotFound;
