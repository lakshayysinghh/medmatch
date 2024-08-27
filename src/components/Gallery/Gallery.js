import React from 'react';
import 'glightbox/dist/css/glightbox.css';
import GLightbox from 'glightbox';
import Gal1 from '../assets/img/gallery/gallery-1.jpg'
import Gal2 from '../assets/img/gallery/gallery-2.jpg'
import Gal3 from '../assets/img/gallery/gallery-3.jpg'
import Gal4  from '../assets/img/gallery/gallery-4.jpg'
import Gal5 from '../assets/img/gallery/gallery-5.jpg'
import Gal6 from '../assets/img/gallery/gallery-6.jpg'
import Gal7 from '../assets/img/gallery/gallery-7.jpg'
import Gal8 from '../assets/img/gallery/gallery-8.jpg'
const Gallery = () => {
  React.useEffect(() => {
    GLightbox({
      selector: '.glightbox',
      loop: true,
    });
  }, []);

  const galleryImages = [
    Gal1,
    Gal2,
    Gal3,
    Gal4,
    Gal5,
    Gal6,
    Gal7,
    Gal8,
  ];

  return (
    <section id="gallery" className="gallery section p-12">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
        <p className="text-gray-600">Explore our gallery to view snapshots of our state-of-the-art facilities, advanced technology, and moments of care in action.</p>
      </div>

      <div className="container-fluid mt-8" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item overflow-hidden border-r-3 border-b-3 border-gray-200  p-1">
              <a href={image} className="glightbox" data-gallery="images-gallery">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
