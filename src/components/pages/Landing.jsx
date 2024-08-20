import React,{useEffect} from 'react'
import "./Landing.css"
import Navbar from '../navbar/Navbar'
import { Box, Center,Heading,Text,UnorderedList,Image } from '@chakra-ui/react'
import linux from "../../assets/Linux.png"
import green from "../../assets/Green.png"
import vlc from "../../assets/Vlc.png"
import py from "../../assets/Python.png"
const Landing = () => {
  const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
  }
  useEffect(() => {
    const handleScroll = () => {
      //const scrollThreshold =700;
      console.log(window.scrollY);
     
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
}, []);
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
      w={{base:"100%",md:"100%",lg:"100%"}}
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
            h={{base:"700px",md:"900px",lg:"700px"}}
            display="flex"
            flexDirection={{base:"column",md:"row",lg:"row"}}
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
              marginLeft={{lg:"45px"}}
              w={{ base: '350px',sm:"480px", md: '500px', lg: '750px' }}
              h={{base:"400px",md:"600px",lg:"500px"}}
              fontSize={{base:"40px",md:"32px",lg:"95px"}}
              color="#FFB347"
              fontFamily="bolder"
            >

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                w={{base:"300px",md:"400px",lg:"700px"}}
                h={{base:"60px",md:"55px",lg:"90px"}}

              >
                <Text
                  lineHeight={{base:"60px",md:"25px",lg:"80px"}}
                  style={{ paddingLeft: "30px" }}
                  className='para'
                >Free Open
                </Text>
                <Text
                  fontSize={{base:"30px",md:"25px",lg:"75px"}}

                >
                  🚀
                </Text>

          
              </Box>

               
               <Text
                    lineHeight={{base:"30px",md:"25px",lg:"100px"}}
                    style={{ paddingLeft: "30px" }}
                    className='para'
               >Source </Text>
               <Text
                     
                    lineHeight={{base:"60px",md:"25px",lg:"100px"}}
                    style={{ paddingLeft: "30px" }}
                    className='para'
               >
                    Software
               </Text>
              <Box
                fontSize={{base:"0.75rem",md:"25px",lg:"20px"}}
                paddingLeft="30px"
                paddingTop={{base:"15px",md:"20px",lg:"20px"}}
                
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
              display="none"
              w="30%"
              h="500px"
             
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cube-container"
                display="none"
              >
                <Box className="cube"
                   w={{ base: '0', md: '0', lg: '0' }}
                >
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
                  <Box className="face top"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={py}
                      w="175px"
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