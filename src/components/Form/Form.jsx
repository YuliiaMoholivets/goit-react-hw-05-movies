import { useSearchParams } from 'react-router-dom';
import styles from '../../page/Movies/Movies.module.css'

export const Form = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let firstValue = searchParams.get('firstValue');

    const handleSubmitSearchMovie = evt => {
    evt.preventDefault();
    firstValue = evt.currentTarget.elements.name.value;
    if (firstValue.trim() === '') {
      return;
    }
    setSearchParams({ firstValue });
    };

  return (
    <div>
        <form className={styles.SearchForm} onSubmit={handleSubmitSearchMovie}>
        <input
            className={styles.input}
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search film"
   
          />
          <button type="submit" className={styles.Button}>
            <span className={styles.label}>Search</span>
          </button>
        </form>
      </div>
  )
}
