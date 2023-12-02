import styles from "../Styling/projects.module.css"
import projectPhoto from "../Documents/fathom.png";

export default function Projects(){
    return (
        <div className={styles.projects} id="projects">
            <h1>Projects</h1>
            <div className={styles.cont}>
                <div className={styles.projectDiv}>
                    <img src={projectPhoto} alt="Fathom Health" />
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
                <div className={styles.projectDiv}>
                    <img src={projectPhoto} alt="Fathom Health" />
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