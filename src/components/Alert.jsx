// export const Product = ({
//   name,
//   imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
//   price,
// }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// };

// import PropTypes from 'prop-types';

// export const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map(book => {
//         return <li key={book.id}>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   color: 'white',
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

import clsx from 'clsx';
import css from './Alert.module.css';
import { HiUser } from 'react-icons/hi';

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

export const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <p>
          <HiUser className="my-icon" size="24" /> {name}
        </p>
      </p>
    </div>
  );
};
