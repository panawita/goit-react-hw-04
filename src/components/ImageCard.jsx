import styles from './ImageCard.module.css';

const ImageCard = ({ alt_description, urls, updateModalState }) => {
  return (
    <div
      className={styles.card}
      onClick={() => updateModalState(urls.regular, alt_description)}
    >
      <img
        className={styles.cardImage}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
