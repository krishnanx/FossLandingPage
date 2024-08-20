import React from 'react'
import "./Landing.css"
import Navbar from '../navbar/Navbar'
import { Box, Center,Heading,Text,UnorderedList,Image } from '@chakra-ui/react'
import linux from "../../assets/Linux.png"
import green from "../../assets/Green.png"
import vlc from "../../assets/Vlc.png"
import py from "../../assets/Python.png"
const Landing = () => {
    const theme = {
        width: '100%',
        height: '100%',
        backgroundImage: `
          radial-gradient(
            circle farthest-side at 0% 50%,
            #282828 23.5%,
            rgba(255, 170, 0, 0) 0
          ) 21px 30px,
          radial-gradient(
            circle farthest-side at 0% 50%,
            #a1000e 24%,
            rgba(240, 166, 17, 0) 0
          ) 19px 30px,
          linear-gradient(
            #282828 14%,
            rgba(240, 166, 17, 0) 0,
            rgba(240, 166, 17, 0) 85%,
            #282828 0
          ) 0 0,
          linear-gradient(
            150deg,
            #282828 24%,
            #a1000e 0,
            #a1000e 26%,
            rgba(240, 166, 17, 0) 0,
            rgba(240, 166, 17, 0) 74%,
            #a1000e 0,
            #a1000e 76%,
            #282828 0
          ) 0 0,
          linear-gradient(
            30deg,
            #282828 24%,
            #a1000e 0,
            #a1000e 26%,
            rgba(240, 166, 17, 0) 0,
            rgba(240, 166, 17, 0) 74%,
            #a1000e 0,
            #a1000e 76%,
            #282828 0
          ) 0 0,
          linear-gradient(90deg, #a1000e 2%, #282828 0, #282828 98%, #a1000e 0%) 0 0
        `,
        backgroundSize: '40px 60px',
        backgroundColor: '#282828'
      }
  return (
    
    <Box 
        className='Landing'
        display="flex"
        flexDirection="column"
       
        alignItems="center"
        bg="radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px / 40px 60px,
        radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px / 40px 60px,
        linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 / 40px 60px #282828"
    >
       
        <Box
            w="100%"
            h="700px"
           
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
            marginBottom="50px"
        >
            <Box
                display="flex"
                flexDir="column"
                justifyContent="center"
              
               
                
                //opacity="0.5"
                boxShadow="5px 5px 40px rgba(255, 255, 255, 0.5)"
                borderRadius="20px"
                marginLeft="70px"
                w="50%"
                h="500px"
                fontSize="95px"
                color="#FFB347"
                fontFamily="bolder"
            >

              <Box
                display="flex"
                
                h="90px"
              >
                <p
                  style={{ lineHeight: "90px",paddingLeft: "30px" }}
                  className='para'
                >Free Open
                </p>
                <p
                  style={{marginLeft:"100px",fontSize:"75px"}}

                >
                  🚀
                </p>

          
              </Box>
               
               <p
                    style={{ lineHeight: "90px",paddingLeft: "30px" }}
                    className='para'
               >Source </p>
               <p
                    style={{ lineHeight: "90px",paddingLeft: "30px" }}
                    className='para'
               >
                    Software
               </p>
              <Box
                fontSize="20px"
                paddingLeft="30px"
                paddingTop="30px"
                
              >
                <p className='sentence'>
                  FOSS MEC is a non-profit foundation that aims at 
                </p>
                <p className='sentence'>
                  promoting and strengthening the Free and Open Source Software (FOSS) ecosystem among MECians.
                </p>
              </Box>
            </Box>
           
            <Box
              w="30%"
              h="500px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cube-container"
               
              >
                <Box className="cube">
                  <Box className="face front">
                    <Image
                      src={linux}
                    >

                    </Image>
                  </Box>
                  <Box className="face back">
                    
                  </Box>
                  <Box className="face right">
                    <Image
                        src={green}
                      >

                    </Image>
                  </Box>
                  <Box className="face left">
                    
                  </Box>
                  <Box className="face top">
                    <Image
                      src={py}
                    >

                    </Image>
                  </Box>
                  <Box className="face bottom">
                  <Image
                      src={vlc}
                    >
                      
                    </Image>
                  </Box>
                </Box>
              </Box>
            </Box>
        </Box>
        {/*<Box
            w="100%"
            h="900px"
        >
            <h1
                className='aboutUs'
                color="orange"
                m="50px"
            >
                Discover FOSS MEC: A Community of Open-Source Enthusiasts
            </h1>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent='space-around'
                alignItems="center"
                w="100%"
                h="500px"
                
            >
                <Box className="card"
                    
                >
                    <Box className="bg" ></Box>
                    <Box className="blob"></Box>
                </Box>   

                <Box className="card">
                    <Box className="bg"></Box>
                    <Box className="blob"></Box>
                </Box>  
                <Box className="card">
                    <Box className="bg"></Box>
                    <Box className="blob"></Box>
                </Box>  
            </Box>
            
        </Box>*/}
    </Box>
  )
}

export default Landing