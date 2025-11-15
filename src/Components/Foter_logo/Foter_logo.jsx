import scss from "./Foter_logo.module.scss";

function Foter_logo () {
    return(
        <section className={scss.Foter_logo}>
            <div className={scss.title_logo}>
                <h1>ROBO.SCHOOL</h1>
                <h6>© ROBO.SCHOOL</h6>
            </div>
            <div className={scss.Number}>
                <p>+7 800 000 11 22</p>
            </div>
        </section>
    );
}

export default Foter_logo;