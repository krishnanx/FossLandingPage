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
      w={{base:"100%",md:"100%",xl:"100%"}}
      h={{base:"900px",md:"1000px",lg:"1600px",xl:"1600px"}}
      
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
            h={{base:"5000px",md:"6000px",lg:"1000px",xl:"700px"}}
            display="flex"
            flexDirection={{base:"column",md:"column",xl:"row"}}
            alignItems="center"
            justifyContent="space-evenly"
            marginBottom="50px"
            marginTop={{base:"50px",xl:"50px"}}
        >
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              
              
              
              //opacity="0.5"
              boxShadow="5px 5px 40px rgba(255, 255, 255, 0.5)"
              borderRadius="20px"
              marginLeft={{xl:"45px"}}
              w={{ base: '350px',sm:"480px", md: '600px', xl: '750px' }}
              h={{base:"300px",md:"500px",lg:"400px",xl:"500px"}}
              fontSize={{base:"40px",md:"65px",xl:"95px"}}
              color="#FFB347"
              fontFamily="bolder"
              marginBottom={{base:"0"}}
            >

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                w={{base:"300px",md:"550px",xl:"700px"}}
                h={{base:"60px",md:"55px",xl:"90px"}}

              >
                <Text
                  lineHeight={{base:"60px",md:"50px",xl:"80px"}}
                  style={{ paddingLeft: "30px" }}
                  className='para'
                >Free Open
                </Text>
                <Text
                  fontSize={{base:"30px",md:"65px",xl:"75px"}}

                >
                  🚀
                </Text>

          
              </Box>

               
               <Text
                    lineHeight={{base:"30px",md:"70px",xl:"100px"}}
                    style={{ paddingLeft: "30px" }}
                    className='para'
               >Source </Text>
               <Text
                     
                    lineHeight={{base:"60px",md:"70px",xl:"100px"}}
                    style={{ paddingLeft: "30px" }}
                    className='para'
               >
                    Software
               </Text>
              <Box
                fontSize={{base:"0.75rem",md:"20px",xl:"20px"}}
                paddingLeft="30px"
                paddingTop={{base:"15px",md:"30px",xl:"20px"}}
                
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
              h={{base:"100px",lg:"400px",xl:"500px"}}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="cube-container"
                w={{base:"100px",lg:"200px"}}
                h={{base:"100px",lg:"200px"}}
                sx={{
                  perspective:{base:"900px",lg:"800px"}
                }} 
              >
                <Box className="cube"
                   //w={{ base: '0', md: '0', lg: '0' }}
                >
                  <Box className="face front"
                    width= {{base:"125px",lg:"200px"}}
                    h= {{base:"125px",lg:"200px"}}
                    sx={{transform: {base:'translateZ(62px)',lg:"translateZ(100px)"}}}

                  >
                    <Image
                      src={linux}
                    >

                    </Image>
                  </Box>
                  <Box className="face back"
                    width= {{base:"125px",lg:"200px"}}
                    h= {{base:"125px",lg:"200px"}}
                    sx={{transform: {base:'rotateY(180deg) translateZ(62px)',lg:"rotateY(180deg) translateZ(100px)"}}}
                  >
                    
                  </Box>
                  <Box className="face right"
                    width= {{base:"125px",lg:"200px"}}
                    h= {{base:"125px",lg:"200px"}}
                    sx={{transform: {base:'rotateY(90deg) translateZ(62px)',lg:"rotateY(90deg) translateZ(100px)"}}}
                  >
                    <Image
                        src={green}
                      >

                    </Image>
                  </Box>
                  <Box className="face left"
                    width= {{base:"125px",lg:"200px"}}
                    h= {{base:"125px",lg:"200px"}}
                    sx={{transform: {base:'rotateY(-90deg) translateZ(62px)',lg:"rotateY(-90deg) translateZ(100px)"}}}
                  >
                    
                  </Box>
                  <Box className="face top"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width= {{base:"125px",lg:"200px"}}
                    h= {{base:"125px",lg:"200px"}}
                    sx={{transform: {base:'rotatex(90deg) translateZ(62px)',lg:"rotatex(90deg) translateZ(100px)"}}}
                  >
                    <Image
                      src={py}
                      w="175px"
                    >

                    </Image>
                  </Box>
                  <Box className="face bottom"
                    width= {{base:"125px",lg:"200px"}}
                    h= {{base:"125px",lg:"200px"}}
                    sx={{transform: {base:'rotatex(-90deg) translateZ(62px)',lg:"rotatex(-90deg) translateZ(100px)"}}}
                  >
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