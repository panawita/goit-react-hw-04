import { Formik, Form, Field } from 'formik';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import { memo } from 'react';

import styles from './SearchBar.module.css';

const initialValue = { query: '' };

const SearchBar = memo(({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (!values.query) {
      toast.error('Please enter a search term', {
        position: 'top-right',
        reverseOrder: 'true',
      });
      return;
    }
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header className={styles.header}>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.input}
          />
          <Button variant="outlined" type="submit">
            Search
          </Button>
        </Form>
      </Formik>
    </header>
  );
});

export default SearchBar;
