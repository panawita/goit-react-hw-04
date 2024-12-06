import { useState, useEffect } from 'react';
import fetchImages from '../api/images-api';

const useImageSearch = (queryValue, page) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (queryValue === '') return;

    const handleSearch = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        if (page === 1) setImages([]);
        const data = await fetchImages(queryValue, page);
        if (data.total === 0) return;
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();
  }, [queryValue, page]);

  return { images, isLoading, isError, totalPages };
};

export default useImageSearch;
