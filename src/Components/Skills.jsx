import styles from "../Styling/skills.module.css"
import express from "../Documents/express.png"

export default function Skills(){
    return (
        <div className={styles.skills} id="skills">
            <h1>Skills</h1>
            <div className={styles.cont}>
                <div>
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="HTML5" />
                    <h1>HTML</h1>
                </div>
                <div>
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="CSS3" />
                    <h1>CSS</h1>
                </div>
                <div>
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt="JS" />
                    <h1>JavaScript</h1>
                </div>
                <div>
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt="ReactJS" />
                    <h1>MongoDB</h1>
                </div>
                <div>
                    <img src={express} alt="ReactJS" />
                    <h1>Express</h1>
                </div>
                <div>
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="ReactJS" />
                    <h1>React</h1>
                </div>
                <div>
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt="ReactJS" />
                    <h1>Node.js</h1>
                </div>
            </div>
            <h1>Tech Stacks</h1>
            <div className={styles.cont}>
                <div>
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt="GIT" />
                    <h1>Git</h1>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64a4MrBgFFiT0oUsfz0EM_Mf4MuXDtyNUiQ&usqp=CAU" alt="VSC" />
                    <h1>VS Code</h1>
                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="Postman" />
                    <h1>Postman</h1>
                </div>
            </div>
        </div>
    )
} 