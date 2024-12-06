// import styles from './ErrorMessage.module.css';

// const ErrorMessage = ({ message }) => {
//   return (
//     <div cssName={styles.ErrorMessage}>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default ErrorMessage;

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ errorDetails }) => {
  return (
    <div className={styles.error}>
      <p className={styles.errorMessage}>
        {errorDetails || 'Something went wrong, please reload your page!'}{' '}
      </p>
    </div>
  );
};

export default ErrorMessage;
