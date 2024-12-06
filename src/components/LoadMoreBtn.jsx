import Button from '@mui/material/Button';

const LoadMoreBtn = ({ handleLoadMore, isActive }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <Button
        variant="contained"
        onClick={handleLoadMore}
        type="button"
        disabled={isActive}
      >
        Load More
      </Button>
    </div>
  );
};

export default LoadMoreBtn;
