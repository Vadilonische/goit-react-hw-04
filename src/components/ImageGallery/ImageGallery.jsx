import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul>
      {images.map(({ id, urls, slug }) => (
        <li key={id}>
          <ImageCard
            imgUrl={urls.small}
            imgDescr={slug}
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}
