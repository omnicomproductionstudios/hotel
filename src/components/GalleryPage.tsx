'use client';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function GalleryPage() {
   const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="masonry"
        >
            <a href="/images/room.jpg">
                <img alt="img1" src="/images/room.jpg" />
            </a>
            <a href="/images/room1.jpg">
                <img alt="img2" src="/images/room1.jpg" />
            </a>
            <a href="/images/acti2.jpg">
                <img alt="img2" src="/images/acti2.jpg" />
            </a>
            <a href="/images/hero1.jpg">
                <img alt="img2" src="/images/hero1.jpg" />
            </a>
            <a href="/images/hero2.jpg">
                <img alt="img2" src="/images/hero2.jpg" />
            </a>
            <a href="/images/activity1.jpg">
                <img alt="img2" src="/images/activity1.jpg" />
            </a>
            <a href="/images/activity2.jpg">
                <img alt="img2" src="/images/activity2.jpg" />
            </a>
            <a href="/images/activity3.jpg">
                <img alt="img2" src="/images/activity3.jpg" />
            </a>
            <a href="/images/room.jpg">
                <img alt="img1" src="/images/room.jpg" />
            </a>
            <a href="/images/room1.jpg">
                <img alt="img2" src="/images/room1.jpg" />
            </a>
            <a href="/images/acti2.jpg">
                <img alt="img2" src="/images/acti2.jpg" />
            </a>
            <a href="/images/hero1.jpg">
                <img alt="img2" src="/images/hero1.jpg" />
            </a>
            <a href="/images/hero2.jpg">
                <img alt="img2" src="/images/hero2.jpg" />
            </a>
            <a href="/images/activity1.jpg">
                <img alt="img2" src="/images/activity1.jpg" />
            </a>
            <a href="/images/activity2.jpg">
                <img alt="img2" src="/images/activity2.jpg" />
            </a>
            <a href="/images/activity3.jpg">
                <img alt="img2" src="/images/activity3.jpg" />
            </a>

        </LightGallery>
    );
}

export default GalleryPage