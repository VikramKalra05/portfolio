import styles from "../Styling/contact.module.css"

export default function Contact(){
    return (
        <div className={styles.contact} id="contact">
            <h2>Get in touch</h2>
            <h1>Vikram Kalra</h1>
            <div className={styles.cont}>
                <a href="https://www.linkedin.com/in/vikram-kalra-b66903253/" target="_blank">LinkedIn</a>
                <a href="https://github.com/VikramKalra05" target="_blank">GitHub</a>
                <a href="mailto:vikramkalra2005@gmail.com" target="_blank">Email</a>
                <a href="tel:+918103504444" target="_blank">Phone</a>
            </div>
        </div>
    )
} 