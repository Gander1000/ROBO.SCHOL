import scss from "./Foter.module.scss";

function Foter () {
    return(
        <section className={scss.Foter}>
            <div className={scss.contai_title}>
                <h1>Запишитесь на курс <br /> со скидкой 10%</h1>
                <span>Акция действительна до 10 марта 2022 года</span>
            </div>
            <div className={scss.contai_input_button}>
                <input type="text" placeholder="Имя" />
                <input type="tel" placeholder="Телефон" />
                <input type="email" placeholder="E-mail" />
                <button>Оформить заявку</button>
            </div>
        </section>
    );
}

export default Foter;