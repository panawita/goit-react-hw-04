import ImageCard from './ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal, updateModalState }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, alt_description, urls }, index) => (
        <li
          className={styles.galleryItem}
          key={`${id}-${index}`}
          onClick={openModal}
        >
          <ImageCard
            urls={urls}
            alt_description={alt_description}
            updateModalState={updateModalState}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
