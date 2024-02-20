import styles from "../Styling/projects.module.css"
import projectPhoto from "../Documents/myntra.png"
import projectPhoto1 from "../Documents/fathom.png";

export default function Projects(){
    return (
        <div className={styles.projects} id="projects">
            <h1>Projects</h1>
            <div className={styles.cont}>
                <div className={styles.projectDiv}>
                    <img src={projectPhoto} alt="Myntra" />
                    <div>
                        <h2>Myntra Clone</h2>
                        <ul>
                            <li>Cloned Myntra's original website</li>
                            <li>Dynamic men/women/kids clothes section</li>
                            <li>Register, login, and logout functionalities</li>
                            <li>User-friendly navigation</li>
                        </ul>
                        <p>Tech Stack - MongoDB | Express | React | Node.js | Git | Chakra UI</p>
                        <div className={styles.links}>
                            <a href="https://myntra-three.vercel.app/" target="_blank">Website</a>
                            <a href="https://github.com/VikramKalra05/Myntra-Clone" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <img src={projectPhoto1} alt="Fathom Health" />
                    <div>
                        <h2>Fathom Health Clone</h2>
                        <ul>
                            <li>Cloned Fathom Health's design</li>
                            <li>Dynamic news section</li>
                            <li>Featured news highlights</li>
                            <li>User-friendly navigation</li>
                        </ul>
                        <p>Tech Stack - React | CSS | Chakra UI | Git</p>
                        <div className={styles.links}>
                            <a href="https://fathom-health.vercel.app/" target="_blank">Website</a>
                            <a href="https://github.com/VikramKalra05/Fathom-Health" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 