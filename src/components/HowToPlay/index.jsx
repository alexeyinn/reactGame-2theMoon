import "./style.scss";

function HowToPlay() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={"/img/howToPlay/1.png"}
            class="d-block w-100"
            alt="How to play slide1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Чтобы начать игру,</h5>
            <p>нажми "Левую кнопку мыши" и соверши свой первый прожок!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={"/img/howToPlay/2.png"}
            class="d-block w-100"
            alt="How to play slide2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Увеличивай свою капитализацию!</h5>
            <p>Прыгай по платформам и поглащай другие монеты!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={"/img/howToPlay/3.png"}
            class="d-block w-100"
            alt="How to play slide3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Стремись к первому месту на рынке!</h5>
            <p>И двигайся по таблице лидеров!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={"/img/howToPlay/4.png"}
            class="d-block w-100"
            alt="How to play slide4"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Падаешь?</h5>
            <p>Используй двойной прыжок во время снижения!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={"/img/howToPlay/5.png"}
            class="d-block w-100"
            alt="How to play slide5"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Надоела музыка?</h5>
            <p>Можешь отключить ее в правом верхнем углу!</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HowToPlay;
