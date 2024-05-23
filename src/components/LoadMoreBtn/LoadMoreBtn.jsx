export default function LoadMoreBtn({ onLoadMore, loading }) {
  return (
    <div>
      <button onClick={onLoadMore} disabled={loading}>
        {loading ? "Please wait, loading..." : "Load More"}
      </button>
    </div>
  );
}
