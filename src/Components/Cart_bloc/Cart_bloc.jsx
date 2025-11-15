import scss from "./Cart_bloc.module.scss";

function Cart_bloc() {
  const Title = [
    {
      h1: "– PRO –",
      p: "20.000 ₽",
      span: "УМК по робототетхнике и программированию",
      button: "Оставить заявку",
    },
    {
      h1: "– PRO –",
      p: "20.000 ₽",
      span: "УМК по робототетхнике и программированию",
      button: "Оставить заявку",
    },
    {
      h1: "– PRO –",
      p: "20.000 ₽",
      span: "УМК по робототетхнике и программированию",
      button: "Оставить заявку",
    },
  ];

  return (
    <section className={scss.Cart_bloc}>
      <div className={scss.container}>
        <div className={scss.h1}>
          <h1>Выберите нужный пакет</h1>
        </div>
        <div className={scss.contai_bloc}>
          {Title.map((item, index) => (
            <div className={scss.conati} key={index}>
              <div className={scss.bloc}>
                <h1>{item.h1}</h1>
                <div className={scss.title_con}>
                  <p>{item.p}</p>
                  <span>{item.span}</span>
                </div>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart_bloc;
