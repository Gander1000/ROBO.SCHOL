import scss from "./Heder.module.scss";

const Heder = () => {
  return (
    <section className={scss.Heder}>
      <h1>ROBO.SCHOOL</h1>
      <div className={scss.contai_a}>
        <a href="">О школе</a>
        <a href="">Тренеры</a>
        <a href="">Стоимость</a>
      </div>
      <h1>+7 800 000 11 22</h1>
    </section>
  );
};

export default Heder;
