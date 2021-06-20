/* eslint-disable */
import "../styles/Page.module.scss";
export default function Cibo(props) {
  const title = "Il Cibo";

  return (
    <>
      <div className="gallery__page ">
        <div className="swiper-container">
          <img
            src="https://anticaosterialucca.it/wp-content/uploads/2021/04/cibo-1024x768.png"
            alt=""
          />

          {/* <div class="swiper-wrapper">
        
          <div class="swiper-slide">
                    <img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
          </div>
        
      </div> */}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrollbar"></div>
        </div>
      </div>
      <div className="content__page">
        <h1>{title}</h1>
        Contenuto
      </div>
    </>
  );
}
