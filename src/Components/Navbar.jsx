import styles from "../Styling/navbar.module.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../Documents/Vikram-Kalra-Resume.pdf"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <AnchorLink href="#home" className={styles.logo}>
                <img src="https://www.valiantglass.com.au/wp-content/pushups/2019/06/vgs-fav-1.png" alt="logo" />
            </AnchorLink>
            <div className={styles.pages}>
                <Pages />
            </div>
        </div>
    )
} 

const openResume = () => {
    window.open(
        "https://drive.google.com/file/d/14RGDaZZfI1sZrR_r12skkxdfXOk0hgwr/view?usp=sharing",
        "_blank"
    )
}

const Pages = () => {
    return (
        <>
            <AnchorLink href="#home">
                Home
            </AnchorLink> 
            <AnchorLink href="#about">
                About
            </AnchorLink> 
            <AnchorLink href="#skills">
                Skills
            </AnchorLink> 
            <AnchorLink href="#projects">
                Projects
            </AnchorLink> 
            <AnchorLink href="#contact">
                Contact
            </AnchorLink> 
            <a href={Resume} onClick={openResume} download="Vikram-Kalra-Resume">
                Resume
            </a>
        </>
    )
}
