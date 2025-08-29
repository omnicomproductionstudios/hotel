'use client';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

type galleyProp ={
  alt: string,
  src: string
}

function GalleryPage({alt, src}: galleyProp) {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <img src={src} alt={alt} />
      </PhotoView>
    </PhotoProvider>
  );
}
export default GalleryPage;