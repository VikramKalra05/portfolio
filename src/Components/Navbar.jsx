import styles from "../Styling/navbar.module.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../Vikram-Kalra-Resume.pdf"
import { useState } from "react";
import {HamburgerIcon} from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react'
import { useEffect } from "react";


function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

export default function Navbar(){
    const [width, setWidth] = useState(getWindowDimensions())
    const [isMobileScreen, setMobileScreen] = useState(false)

    useEffect(()=>{
        function handleResize() {
            setWidth(getWindowDimensions());
          }
        window.addEventListener('resize', handleResize);
        if(width < 767){
            setMobileScreen(true)
        }else{
            setMobileScreen(false)
        }
    }, [getWindowDimensions()])

    

    // console.log(width);

    return (
        <div className={styles.navbar}>
            <AnchorLink href="#home" className={styles.logo}>
                <img src="https://www.valiantglass.com.au/wp-content/pushups/2019/06/vgs-fav-1.png" alt="logo" />
            </AnchorLink>
            <div className={styles.pages}>
                {isMobileScreen ? <IconSelect /> : <Pages />}
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

const IconSelect = () => {
    return (
        <Select icon={<HamburgerIcon />}>
            <option>
                <AnchorLink href="#contact">
                    Contact
                </AnchorLink>
            </option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    )
}