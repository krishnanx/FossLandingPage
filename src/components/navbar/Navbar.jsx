import React,{useRef} from 'react'
import { Box ,Button,Image, Link,useDisclosure, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton } from '@chakra-ui/react' 
import {
   
  } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import logo from "../../assets/fossmec.png"
import "./Navbar.css"
const Navbar = () => {
    const theme={
        cursor:"pointer"

    }
    const background = `radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px / 40px 60px,
        radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px / 40px 60px,
        linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 / 40px 60px #282828`
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
    const breakpoints = {
        base: '0em', // 0px
        sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
        md: '48em', // ~768px
        lg: '62em', // ~992px
        xl: '80em', // ~1280px
        '2xl': '96em', // ~1536px
      }
    const handleClick=(m)=>{
        console.log(m)
        if(window.scrollY!==m){
            const targetPosition =m; // Target scroll position in pixels
            const startPosition = window.scrollY; // Current scroll position
            const distance = targetPosition - startPosition;
            const duration =1400; // Duration in milliseconds
            let startTime = null;
       
           
            console.log("start:",startPosition)
            const ease = (t, b, c, d) => {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
            };
        
            const animation = (currentTime) => {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const run = ease(timeElapsed, startPosition, distance, duration);
              window.scrollTo(0, run);
              if (timeElapsed < duration) requestAnimationFrame(animation);
            };
        
            requestAnimationFrame(animation);

    }}
  return (
    <Box 
        className='navbar'
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        //bgColor="transparent"
        //bg="rgba(255,255, 255, 1)"
        bg={background}

        
    >
        <Box
            w={{base:"160px",md:"100px",lg:"100px"}}
            h={{base:"10px",md:"100px",lg:"75px"}}
            display="flex"
            flexDirection="row"
            justifyContent={{base:"space-evenly",lg:"flex-end"}}
            alignItems="center"
        >
            <Button ref={btnRef} colorScheme='transparent' onClick={onOpen}
                display={{base:"flex",md:"none",lg:"none"}}
                sx={{
                    '-webkit-tap-highlight-color': 'transparent',
                  }}   
                p="0"

            >
                <HamburgerIcon w="50px" h="30px"/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                display="flex"
                size={'full'}
               
                
            >
                <DrawerOverlay/>
                <DrawerContent bg={background}>
                {<DrawerCloseButton 
                    sx={{ '-webkit-tap-highlight-color': 'transparent'}}
                />}
                
                <DrawerBody>
                <Box
                    w={{base:"100%"}}
                    h="600px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Box
                        w={{base:"250px",md:"100px",lg:"300px"}}
                        h={{base:"100px"}}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        color='white'
                       
                    >
                        <Link
                            style={theme}
                            fontSize="25px"
                            tabindex="-1"
                            _hover={{textDecoration:"none"}}
                            textAlign="center"
                            lineHeight="80px"
                            onClick={()=>{
                                handleClick(0)
                                onClose(); // Close the drawer
                            }}
                            
                        >
                            Home
                        </Link>
                        <Link
                            style={theme}
                            fontSize="25px"
                             textAlign="center"
                             lineHeight="80px"
                            _hover={{textDecoration:"none"}}
                            onClick={()=>{
                                handleClick(800)
                                onClose(); // Close the drawer
                            }}
                        >
                            About us
                        </Link>
                        <Link
                            style={theme}
                            fontSize="25px"
                             textAlign="center"
                             lineHeight="80px"
                            _hover={{textDecoration:"none"}}
                            onClick={()=>{
                                handleClick(1600)
                                onClose(); // Close the drawer
                            }}
                        >
                            Events
                        </Link>
                    </Box>
                
                
                </Box>
               
                </DrawerBody>

                
                </DrawerContent>
            </Drawer>
            <Button
                w="80px"
                h="60px"
                bg="transparent"
                padding={0}
                _hover={{bg:"transparent"}}
                onClick={()=>handleClick(0)}
                 sx={{ '-webkit-tap-highlight-color': 'transparent'}}
            >
                <Image 
                    src={logo}
                    
                    w="1200px"
                    h="60px"
                >

                </Image>
            </Button>
           
        </Box>
        <Box
            w={{base:"70px",md:"300px",lg:"300px"}}
            display={{base:"none",md:"flex",lg:"flex"}}
            justifyContent="space-between"
            color='white'
        >
            <Link
                style={theme}
                tabindex="-1"
                _hover={{textDecoration:"none"}}
                onClick={()=>handleClick(0)}
            >
                Home
            </Link>
            <Link
                style={theme}
                _hover={{textDecoration:"none"}}
                onClick={()=>handleClick(800)}
            >
                About us
            </Link>
            <Link
                style={theme}
                _hover={{textDecoration:"none"}}
                onClick={()=>handleClick(1600)}
            >
                Events
            </Link>
        </Box>
        <Box
            w={{base:"160px",md:"160px",lg:"170px"}}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Button 
                className="button" 
                data-text="Awesome"
            style={{
                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.6)",
                "--animation-color": "#cc7700", // Custom CSS variable for animation color
            }}
            m="0"
            h="auto"
            p="0"
            border="none"
            cursor="pointer"
            position="relative"
           
            bg="transparent"
            as="span"
            letterSpacing="3px"
            textDecoration="none"
            fontSize="1.75rem"
            fontFamily="Montserrat"
            textTransform="uppercase"
            //color="transparent"
            _hover={{
                ".hover-text": {
                  width: "100%",
                  filter: "drop-shadow(0 0 23px var(--animation-color))",
                },
              }}
            _active={{
                bg:"transparent"
            }}
            sx={{
              
              borderRight: "6px solid transparent", // Using `borderRight` to simulate `--border-right`
              position: "relative",
              display: "inline-block",
              '-webkit-tap-highlight-color': 'transparent'
              
            }}
            
            
            >
                <span className="actual-text">&nbsp;join us&nbsp;</span>
                <span aria-hidden="true" className="hover-text">
                &nbsp;join us&nbsp;</span>
            </Button>

        </Box>
    </Box>
  )
}

export default Navbar