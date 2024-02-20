import styles from "../Styling/about.module.css"

export default function About(){
    return (
        <div className={styles.about} id="about">
            <h2>About</h2>
            <h1>I'm Vikram Kalra</h1>
            <p>Motivated Full Stack Web Developer with expertise in JavaScript and the MERN stack. Skilled in designing and implementing efficient server-side APIs and creating seamless frontend components using React.js. Strong problem-solving abilities and attention to detail. Excellent communicator and collaborator, eager to contribute to a dynamic team environment.</p>
            <p>Drop a mail at <a href="mailto:vikramkalra2005@gmail.com" target="_blank">vikramkalra2005@gmail.com</a></p>
        </div>
    )
} 