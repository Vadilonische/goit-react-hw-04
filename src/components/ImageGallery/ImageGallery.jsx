export default function ImageGallery(images) {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul>
      {images.map({ image })}
      <li key={image.id}>
        <div>
          <img src="urls.small" alt="alt_description" />
        </div>
      </li>
    </ul>
  );
}
