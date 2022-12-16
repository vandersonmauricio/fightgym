import styles from '../styles/Navbar.module.css'
import { NavLink} from 'react-router-dom';
import Button from './ButtonStandard';
import stylesButton from '../styles/ButtonStandard.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <span>Logo</span>
            <ul>
               <NavLink to="/" style={{ textDecoration: 'none' }}><li>Home</li></NavLink>
              <NavLink to="/academia" style={{ textDecoration: 'none' }}><li>Academia</li> </NavLink>
                <NavLink to="/contrateseuplano" style={{ textDecoration: 'none' }}><li>Contrate Seu Plano</li></NavLink>
                <NavLink to="/horarios" style={{ textDecoration: 'none' }}><li>Horários</li></NavLink>
                <NavLink to="/galeria" style={{ textDecoration: 'none' }}><li>Galeria</li></NavLink>
                <NavLink to="/blog" style={{ textDecoration: 'none' }}><li>Blog</li></NavLink>
                <NavLink to="/contato" style={{ textDecoration: 'none' }}><li>Contato</li></NavLink>
            </ul>
            <Button className={stylesButton.button} text="Contrate agora"></Button>
        </div>
    )
}

export default Navbar;