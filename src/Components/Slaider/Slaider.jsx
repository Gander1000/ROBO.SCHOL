import scss from "./Slaider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow_svg from "../../assets/Arrow.svg";
import Arrow_png from "../../assets/Arrow.png";
import { useRef, useState } from "react";
import Slider from "react-slick";
import men from "../../assets/Men.svg";

function Slaider() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const After = [
    {
      img: men,
      p: "Максим Петров",
      span: "преподаватель по программированию",
      h3: "Подробнее",
    },
    {
      img: men,
      p: "Максим Петров",
      span: "преподаватель по программированию",
      h3: "Подробнее",
    },
    {
      img: men,
      p: "Максим Петров",
      span: "преподаватель по программированию",
      h3: "Подробнее",
    },
    {
      img: men,
      p: "Максим Петров",
      span: "преподаватель по программированию",
      h3: "Подробнее",
    },
    {
      img: men,
      p: "Максим Петров",
      span: "преподаватель по программированию",
      h3: "Подробнее",
    },
  ];

  const totalSlides = After.length;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    afterChange: (index) => setCurrent(index),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  return (
    <section className={scss.Slaider}>
      <div className={scss.container}>
        <div className={scss.contai_h1}>
          <h1>Профессиональные тренеры</h1>
        </div>

        <div className={scss.Slaider_con}>
          <Slider ref={sliderRef} {...settings}>
            {After.map((item, index) => (
              <div className={scss.bloc_container} key={index}>
                <div className={scss.bloc}>
                  <img src={item.img} alt="MEN" />
                  <p>{item.p}</p>
                  <span>{item.span}</span>
                  <h3>{item.h3}</h3>
                </div>
              </div>
            ))}
          </Slider>
          <div className={scss.next_prev_lini}>
            <div className={scss.progressBar}>
              <div
                className={scss.progressFill}
                style={{ width: `${((current + 1) / totalSlides) * 100}%` }}
              />
            </div>

            <div className={scss.arrows}>
              <button onClick={prevSlide} className={scss.arrowBtn}>
                <img src={Arrow_svg} alt="" />
              </button>
              <button onClick={nextSlide} className={scss.arrowBtn}>
                <img src={Arrow_png} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slaider;
