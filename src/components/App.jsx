// import { useState } from 'react';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';
// import ./Alert.module.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React is amazing</h1>
//       <div className="card">
//         <button onClick={() => setCount(count => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

// const Product = () => {
//   return (
//     <div>
//       <h2>Cookies</h2>
//       <p>Price: 10 credits</p>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }

// import { Product } from './Product.jsx';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// import { BookList } from './Product.jsx';

// import { favouriteBooks } from './Data.jsx';

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// }

import { Alert, UserMenu } from './Alert.jsx';

export const App = () => {
  return (
    <>
      <UserMenu name="Ewa"></UserMenu>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};
