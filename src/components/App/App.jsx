import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { getImages } from "../../api";
import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        const fetchedImages = await getImages(query, page);
        setImages(response.data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, query]);

  const handleSearchSubmit = (topic) => {
    console.log(topic);
  };

  return (
    <div>
      <h1>HW-04</h1>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <p>Loading Images, please wait...</p>}
      {isError && <p>Oops! There wat an error! Try reloading!</p>}

      <ImageGallery images={images} onImageClick={openModal} />
      {
        // модалку написать, кнопку дальше и лоадер с эрором переписать в свои файлы
      }
    </div>
  );
}
