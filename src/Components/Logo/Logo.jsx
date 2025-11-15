import scss from "./Logo.module.scss";
import Group from "../../assets/Group 211.svg";

function Logo () {
    return(
        <section className={scss.Logo}>
            <div className={scss.contai_title}>
                <h1>ROBO SCHOOL</h1>
                <span>Курсы повышения квалификации по робототехнике <br /> для педагогов начальной школы</span>
                <button>Записаться на курс</button>
            </div>
            <div className={scss.contai_img}>
                <img src={Group} alt="" />
            </div>
        </section>
    );
}

export default Logo