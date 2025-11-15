import scss from "./Cart.module.scss";

const Title = [
  {
    h1: "10",
    span: "УМК по различным направлениям по робототехнике",
  },
  {
    h1: "20",
    span: "Школ, в которых запущена робототехника",
  },
  {
    h1: "100",
    span: "Педагогов прошедших курсы повышения квалификации",
  },
  {
    h1: "10 000",
    span: "Обученных детей на базе собственных центров",
  },
];

function Cart() {
  return (
    <section className={scss.Cart}>
      <div className={scss.logo_title}>
        <span>
          <span> Robo School</span>– учреждение для формирования кадрового <br />
          педагогического резерва в сфере робототехники <br /> и программирования
        </span>
      </div>
      <div className={scss.container}>
        {Title.map((item, index) => (
          <div className={scss.bloc} key={index}>
            <h1>{item.h1}</h1>
            <span>{item.span}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart;
