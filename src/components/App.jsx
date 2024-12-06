// import { useState, useEffect } from 'react';
// import ImageGallery from './ImageGallery';
// import fetchImages from '../api/images-api';
// import SearchBar from './SearchBar.jsx';
// import { Toaster } from 'react-hot-toast';
// import Loader from './Loader.jsx';

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = async newQuery => {
//     if (newQuery === query) return;
//     setQuery(newQuery);
//     setPage(1);
//     setImages([];)
//     setIsLoading(true);

//     try {
//       const data = await fetchImages(newQuery, 1);
//       const newImages = data.results.map(img => ({
//         id: img.id,
//         url: img.urls.small,
//         alt: img.alt_description || 'Image from Unsplash',
//       }));
//       setImages(newImages);
//     } catch (error) {
//       console.error(error);
//     }
//     finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Toaster />
//       <SearchBar onSearch={handleSearch} />
//       <ImageGallery images={images} />
//       <Loader />
//     </div>
//   );
// };

// import SearchBar from './SearchBar';
// import ImageGallery from './ImageGallery';
// import Loader from './Loader';
// import LoadMoreBtn from './LoadMoreBtn';
// import ErrorMessage from './ErrorMessage';
// import ImageModal from './ImageModal';
// import useImageSearch from '../hooks/useImageSearch';
// import { Toaster } from 'react-hot-toast';
// import { useState } from 'react';

// const App = () => {
//   const { images, isLoading, error, searchImages, loadMoreImages } =
//     useImageSearch();
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = image => setSelectedImage(image);
//   const closeModal = () => setSelectedImage(null);

//   return (
//     <div>
//       <Toaster />
//       <SearchBar onSearch={searchImages} />
//       {error && <ErrorMessage message={error} />}
//       <ImageGallery images={images} onImageClick={handleImageClick} />
//       {isLoading && <Loader />}
//       {images.length > 0 && !isLoading && (
//         <LoadMoreBtn onClick={loadMoreImages} />
//       )}
//       <ImageModal
//         isOpen={!!selectedImage}
//         onClose={closeModal}
//         image={selectedImage}
//       />
//     </div>
//   );
// };

// export default App;

import { useState, useEffect, useRef, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';

import useImageSearch from '../hooks/useImageSearch';

import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn';
import ImageModal from './ImageModal';

function App() {
  const [page, setPage] = useState(1);
  const [queryValue, setQueryValue] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [altDescription, setAltDescription] = useState('');
  const [errorDetails, setErrorDetails] = useState(null);

  const ref = useRef();

  const { images, isLoading, isError, totalPages } = useImageSearch(
    queryValue,
    page
  );

  useEffect(() => {
    if (isError) {
      setErrorDetails('Something went wrong. Please check your internet connection or try again later.');
    }
  }, [isError]);

  useEffect(() => {
    if (page === 1) return;

    ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [page, images]);

  const handleQuery = newQuery => {
    setQueryValue(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const isActive = useMemo(() => page === totalPages, [page, totalPages]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateModalState = (src, alt) => {
    setModalImage(src);
    setAltDescription(alt);
  };

  return (
    <div ref={ref}>
      <SearchBar onSubmit={handleQuery} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          updateModalState={updateModalState}
        />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage errorDetails={errorDetails} />}{' '}
      {images.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage}
        alt={altDescription}
      />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default App;
