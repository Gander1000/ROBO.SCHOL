import scss from "./Cart_title.module.scss";
import Group from "../../assets/Group 207.svg";

const Title = [
  {
    h1: "Удостоверение",
    span: "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях",
  },
  {
    h1: "Знания",
    span: "По основам разработки учебно-методических комплексов по робототехнике и программированию",
  },
  {
    image: Group,
    h1: "Практику",
    span: "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)",
    sapni: "При наличии свободных мест",
  },
];

function Cart_title() {
  return (
    <section className={scss.Cart_title}>
      <h1>Что вы получите после курса</h1>
      <div className={scss.container}>
        {Title.map((item, index) => (
          <div className={scss.bloc} key={index}>
            <div className={scss.contai}>
              <h1>{item.h1}</h1>

              {item.image && item.sapni && (
                <div className={scss.tooltip}>
                  <img className={scss.icon} src={item.image} alt="" />
                  <span className={scss.tooltipText}>{item.sapni}</span>
                </div>
              )}
            </div>
            <span>{item.span}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart_title;
