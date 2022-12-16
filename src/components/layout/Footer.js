import styles from '../styles/Footer.module.css'

function Footer (){
    return (
       <footer className={styles.footer}>
        <div className={styles.textimg}>
            <div>
                <h1>Aceitamos <section className={styles.fontorange}>
                    <br/>Gympass</section></h1>
            </div>
            <div>
                <span>
                    Copyright © Versus Fight Club 2022.
                </span>
            </div>
        </div>
        
        
       </footer>
    )
}
export default Footer

           {/* <footer className={styles.footer}>
        } <ul>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
            </ul>
            <p><span>FightGym</span>&copy;</p>
    </footer>*/}