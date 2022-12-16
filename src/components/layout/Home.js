import styles from '../styles/Home.module.css'
import Button from '../layout/ButtonStandard'
function Home() {
    return (
        <div className={styles.img}>
            <div>
                <h3>#muaythai é Versus Figh Club!</h3>
                <h1>Academia de Muaythai e Lutas</h1>

            </div>
            <div>
                <p>Vem treinar com a gente! 12 anos de atividade,
                    melhor estrutura de lutas da região.
                    Aulas de Muaythai, Boxe, Jiu Jitsu
                        e Krav Magá.

                </p>
            </div>
            <div>
            <Button text="Contrate online"></Button>
            <Button  text="Contrate Conheça a Versus"></Button>
            </div>
        </div>
    )
}
export default Home