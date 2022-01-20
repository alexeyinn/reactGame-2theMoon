import "./style.scss";
import slide1 from "../../assets/img/howToPlay/1.png";
import slide2 from "../../assets/img/howToPlay/2.png";
import slide3 from "../../assets/img/howToPlay/3.png";
import slide4 from "../../assets/img/howToPlay/4.png";
import slide5 from "../../assets/img/howToPlay/5.png";

function HowToPlay() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={slide1}
            className="d-block w-100"
            alt="How to play slide1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Чтобы начать игру,</h5>
            <p>нажми "Левую кнопку мыши" и соверши свой первый прожок!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide2}
            className="d-block w-100"
            alt="How to play slide2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Увеличивай свою капитализацию!</h5>
            <p>Прыгай по платформам и поглащай другие монеты!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide3}
            className="d-block w-100"
            alt="How to play slide3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Стремись к первому месту на рынке!</h5>
            <p>И двигайся по таблице лидеров!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide4}
            className="d-block w-100"
            alt="How to play slide4"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Падаешь?</h5>
            <p>Используй двойной прыжок во время снижения!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide5}
            className="d-block w-100"
            alt="How to play slide5"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Надоела музыка?</h5>
            <p>Можешь отключить ее в правом верхнем углу!</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HowToPlay;
