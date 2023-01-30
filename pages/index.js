import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState, useEffect} from 'react'
import { NodeNextRequest } from 'next/dist/server/base-http/node'
import {CSSTransition} from 'react-transition-group';

const convertToNextClassName = (className) =>  className.split(' ').map(c => styles[c]).join(' ')


const Home = () => {
  const [visible, setVisible] = useState(false)
  const [infoTabData, setInfoTabData] = useState({title: "Empty", text: "empty", imgPath: "empty"})
  const [smallMenu, setSmallMenu] = useState(false)
  const [smallMenuOpen, setSmallMenuOpen] = useState(false)
  const [sitePositionStyles, setSitePositions] = useState({home: "", about: "", projects: "", contact: ""});

    useEffect(() => {
      const sections = document.querySelectorAll("section[id]");
        const onScroll = () => {
          var scroll_pos = window.pageYOffset;
  
          sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id")
            if ( scroll_pos > sectionTop && scroll_pos <= sectionTop + sectionHeight) {
              //console.log(sectionId)
              setSitePositions( prev => ({...prev, [sectionId]: "highlight"}))
            } else {
              setSitePositions( prev => ({...prev, [sectionId]: ""}))
            }
          }
          )
        };
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, []);
    
    useEffect(() => {
        const updateSize = () => {
          var width = window.innerWidth;
          if (width < 580) {
            setSmallMenu(true)
          } else {
            setSmallMenu(false)
          }
        };
        updateSize()
        window.removeEventListener("resize", updateSize)
        window.addEventListener("resize", updateSize, { passive: true })
        return () => {
          window.removeEventListener("resize", updateSize)
        }
    }, [])

  const overlayVisibility = { display: visible ? 'flex' : 'none'}
  const smallMenuStyle = { display: smallMenuOpen ? 'flex' : 'none'}
  const navButtonStyle = { display: smallMenuOpen ? 'none' : 'flex'}

  const toggleOverlay = () => {
    setInfoTabData({title: "Empty", text: "empty", imgPath: "empty"})
    setVisible(!visible)
  }

  const overlayContentHandler = (id) => {
    const imgPath = `url("/thumb-${id}.jpg")`
    if(id === 1) {
      var infoText = "Weather App is an application that shows real time weather data for almost any city on earth. User account can be made to save your favourite cities."
      setInfoTabData({title: "Weather App", text: infoText, imgPath: imgPath})
    } else if(id === 2) {
      var infoText = "Synthesizer is a digital synthesizer, which is completely made with python and Qt. It has classic options to modify two oscillators: octave, wave type, adsr and volume controls. You can also save and load your presets. "
      setInfoTabData({title: "Synthesizer", text: infoText, imgPath: imgPath})
    } else if(id === 3) {
      var infoText = "Tree planting App was a course project for User Interface construction course. Together with our team we designed an UI, that serves as a medium between donators and tree planters, giving donators involving experience throughout the planting cycle."
      setInfoTabData({title: "Tree planting App UI", text: infoText, imgPath: imgPath})
    }
    setVisible(!visible)
  }

  const toggleSmallMenu = () => {
    setSmallMenuOpen(!smallMenuOpen)
  }

  return (
    <>
      <Head>
        <title>Felix Virtanen</title>
        <meta name="description" content="Portfolio" />
        {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main>
      <div className={convertToNextClassName("overlay flexc")} style={overlayVisibility}>
  <div className={styles.overlayMask} onClick={toggleOverlay}></div>
    <div className={convertToNextClassName("projectInfoTab flexc boxStyle")}>
      <div className={styles.projectInfoTabImg} style={{content: infoTabData.imgPath}}></div>
      <div className={convertToNextClassName("text1p3x underline")}>{infoTabData.title}</div>
      <div className={styles.projectInfoTabText}>
       {infoTabData.text}
      </div>
      <div className={styles.flexr} style={{alignItems: "center", marginBottom: "30px", marginTop: "10px", justifyContent: "space-between"}}>
      { infoTabData.title === "Weather App" ?
        <a className={styles.viewButton} href="https://weather-sun-cloud-rain.fly.dev/" target="_blank" rel="noreferrer">View site</a> : <div className={styles.viewButton} style={{opacity: 0, pointerEvents: "none"}}>View site</div> }
        <div id={styles.xButton} className={styles.xInfo} onClick={toggleOverlay}>
          <div className={styles.x1}></div>
          <div className={styles.x2}></div>
        </div>
      </div>
    </div>
</div>
{ smallMenu === true ? 
<>
  <div className={convertToNextClassName("navButton flexc fixed")} onClick={toggleSmallMenu} style={navButtonStyle}>
    <div className={styles.navButtonStripe}></div>
    <div className={styles.navButtonStripe}></div>
    <div className={styles.navButtonStripe}></div>
  </div>
  {/*<CSSTransition
  in={smallMenuOpen}
  timeout={300}
  classNames="displayMenu"
  mountOnEnter
  unmountOnExit
  appear={true}
>*/}
  <div className={convertToNextClassName("smallMenu flexc")} style={smallMenuStyle}>
     <div id={styles.xButton} className={styles.xSmallMenu} onClick={toggleSmallMenu}>
      <div className={styles.x1}></div>
      <div className={styles.x2}></div>
    </div>
    <a className={convertToNextClassName(`anav white-text ${sitePositionStyles.home}`)} onClick={toggleSmallMenu} href="#home">Home</a>
    <a className={convertToNextClassName(`anav white-text ${sitePositionStyles.about}`)} onClick={toggleSmallMenu} href="#about">About</a>
    <a className={convertToNextClassName(`anav white-text ${sitePositionStyles.projects}`)} onClick={toggleSmallMenu} href="#projects">Projects</a>
    <a className={convertToNextClassName(`anav white-text ${sitePositionStyles.contact}`)} onClick={toggleSmallMenu}href="#contact">Contact</a>
  </div>
  {/*</CSSTransition>*/}
</> :
<nav className={convertToNextClassName("flexr fixed")}>
  <a className={convertToNextClassName(`anav ${sitePositionStyles.home}`)} href="#home">Home</a>
  <a className={convertToNextClassName(`anav ${sitePositionStyles.about}`)} href="#about">About</a>
  <a className={convertToNextClassName(`anav ${sitePositionStyles.projects}`)} href="#projects">Projects</a>
  <a className={convertToNextClassName(`anav ${sitePositionStyles.contact}`)} href="#contact">Contact</a>
</nav>
}
<section id="home" className={styles.flexc}>
  <div className={convertToNextClassName("container flexc")}>
      <div className={styles.customHeader}>Hi, I&apos;m Felix</div>
      <p className={styles.text1p3x}>I&apos;m future full-stack developer, who also has an eye for UI/UX design</p>
  </div>
</section>
<section id="about" className={styles.flexc}>
  <div className={convertToNextClassName("container flexc")} style={{maxWidth: "1000px", paddingTop: "80px", paddingBottom: "50px"}}>
    <div className={styles.customHeader}>About me</div>
    <div className={convertToNextClassName("flexr aboutme")}>
      <p className={styles.text1x} style={{width: "52%", marginBottom: "10px"}}>
        I have recently completed a Bachelor Of Science, majoring in Electrical engineering at Aalto University. My Bachelor&apos;s computer science minor led me to start Master of Science degree, majoring  in Human-Computer Interaction.
        <br /><br />
        I am especially interested in the technological implementation of interactive systems.
        <br /><br />
        I also love producing music.
      </p>
      <div className={styles.faceImg} style={{content:`url("./face-outline.png")`}}></div>
    </div>
  </div>
</section>
<section id="projects" className={styles.flexc} style={{position: "relative"}}>
  <div className={convertToNextClassName("container flexc")} style={{maxWidth: "1000px", paddingTop: "80px", paddingBottom: "170px"}}>
    <div className={styles.customHeader} style={{marginLeft: "180px"}}>Projects</div>
    <div className={convertToNextClassName("projectsContainer flexr")}>
      <div className={styles.projectBox}>
        <div className={convertToNextClassName("projectImg boxStyle")} style={{ background: `url("./thumb-1.jpg") center center/cover`}} onClick={() => overlayContentHandler(1)}></div>
        <div className={styles.flexr}>
          <p className={styles.text1x} style={{textAlign: "left"}}>Weather App</p>
          <p className={convertToNextClassName("text1x textlight")} style={{textAlign: "right"}}>Web dev</p>
        </div>
      </div>
      <div className={styles.projectBox}>
        <div className={convertToNextClassName("projectImg boxStyle")} style={{ background: `url("./thumb-2.jpg") center center/cover`}} onClick={() => overlayContentHandler(2)}></div>
        <div className={styles.flexr}>
          <p className={styles.text1x} style={{textAlign: "left"}}>Synthesizer</p>
          <p className={convertToNextClassName("text1x textlight")} style={{textAlign: "right"}}>Python dev</p>
        </div>
      </div>
      <div className={styles.projectBox}>
        <div className={convertToNextClassName("projectImg boxStyle")} style={{ background: `url("./thumb-3.jpg") center center/cover`}} onClick={() => overlayContentHandler(3)}></div>
        <div className={styles.flexr}>
          <p className={styles.text1x} style={{textAlign: "left"}}>Tree App</p>
          <p className={convertToNextClassName("text1x textlight")} style={{textAlign: "right"}}>UI/UX</p>
        </div>
      </div>
    </div>
  </div>
  <div className={convertToNextClassName("footer flexr")}><p>More about the development can be found from my <a href="https://github.com/felixv99" target="_blank" rel="noreferrer">Github</a></p>
  <a href="https://github.com/felixv99" style={{backgroundImage:`url("./github-logo.svg")`, width: "50px", height: "49px"}}></a>
    
  </div>
</section>
<section id="contact" className={styles.flexc} style={{position: "relative"}}>
  <div className={convertToNextClassName("container flexc")}>
      <div className={styles.customHeader}>Contact</div>
      <p className={styles.text1p3x}>Reach out on <a href="https://linkedin.com/in/felixv1/" target="_blank" rel="noreferrer">LinkedIn</a></p>
  </div>
   <div className={convertToNextClassName("footer flexc")}>
   <div className={styles.flexr} style={{gap: "30px"}}>
      <a href="https://linkedin.com/in/felixv1/" style={{backgroundImage:`url("./linkedin-logo.svg")`, width: "40px", height: "42px"}}></a>
      <a href="https://github.com/felixv99" style={{backgroundImage:`url("./github-logo.svg")`, width: "50px", height: "49px"}}></a>
   </div>
    Designed and developed by Felix Virtanen
  </div>
</section>
</main>
    </>
  )
}

export default Home