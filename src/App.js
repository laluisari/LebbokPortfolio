import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Particles from "react-tsparticles"
// import Slider from "./Components/Slider"
import Bio from "./Components/Bio"
import Service from "./Components/Service"
import Footer from "./Components/Footer"

const App = () => {
  
  return (
    <div>

    <Particles className="particles-canvas"
    options={{
      
      particles: {
        number: {
          value: 30,
         
          density: {
            enable: true,
            value_area: 900
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
          
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.5,
            sync: false
          }
        },
        size: {
          value: 30,
          random: true,
          anim: {
            enable: true,
            speed: 10,
            size_min: 5,
            sync: false
          }
        },
        // line_linked: {
        //   enable: true,
        //   distance: 100,
        //   color: "#ffffff",
        //   opacity: 1,
        //   width: 1
        // },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      // interactivity: {
      //   detect_on: "canvas",
      //   events: {
      //     onHover: {
      //       enable: true,
      //       mode: "bubble",
      //       parallax: {
      //         enable: false,
      //         force: 60,
      //         smooth: 10
      //       }
      //     },
      //     // onClick: {
      //     //   enable: true,
      //     //   mode: "push"
      //     // },
      //     resize: true
      //   },
      //   modes: {
      //     grab: {
      //       distance: 400,
      //       lineLinked: {
      //         opacity: 1
      //       }
      //     },
      //     bubble: {
      //       distance: 400,
      //       size: 50,
      //       duration: 2,
      //       opacity: 1,
      //       speed: 2
      //     },
      //     repulse: {
      //       distance: 200
      //     },
      //     push: {
      //       particles_nb: 4
      //     },
      //     remove: {
      //       particles_nb: 2
      //     }
      //   }
      // },
      // backgroundMask: {
      //   enable: true,
      //   cover: {
      //     color: {
      //       value: {
      //         r: 0,
      //         g: 0,
      //         b: 0
      //       }
      //     }
      //   }
      // },
      // retina_detect: true,
      // fps_limit: 60,
     
    }}
  />
  <Navbar />
  <Header />
  <Bio />
  {/* <Slider /> */}
  <Service /> <Service />
 
  <Footer />
  </div>
  
  );
}

export default App;