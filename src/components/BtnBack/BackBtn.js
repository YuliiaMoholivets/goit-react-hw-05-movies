import { Link, useLocation } from 'react-router-dom';
import styles from './BackBtn.module.css';

const BackBtn = () => {
  const location = useLocation();

  return (
    <Link className={styles.btn} to={location.state.from}>
      &#10229; Go back
    </Link>
  );
};

export default BackBtn;
