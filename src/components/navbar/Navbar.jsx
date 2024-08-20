import React from 'react'
import { Box ,Button,Image} from '@chakra-ui/react'
import logo from "../../assets/fossmec.png"
import "./Navbar.css"
const Navbar = () => {
    const theme={
        cursor:"pointer"
    }
    const handleClick=(m)=>{
       
        
            const targetPosition =m; // Target scroll position in pixels
            const startPosition = window.pageYOffset; // Current scroll position
            const distance = targetPosition - startPosition;
            const duration = 1500; // Duration in milliseconds
            let startTime = null;
        
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

    }
  return (
    <Box 
        className='navbar'
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        //bgColor="transparent"
        //bgColor="rgba(0, 0, 0, 0.5)"
        bg="radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px / 40px 60px,
        radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px / 40px 60px,
        linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
        linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 / 40px 60px #282828"
        
    >
        <Box
            w="100px"
            h="75px"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
            <Button
                w="80px"
                h="60px"
                bg="transparent"
                padding={0}
                _hover={{bg:"transparent"}}
                onClick={()=>handleClick(0)}
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
            w="250px"
            display="flex"
            justifyContent="space-between"
            color='white'
        >
            <a
                style={theme}
                tabindex="-1"
                onClick={()=>handleClick(0)}
            >
                Home
            </a>
            <a
                style={theme}
                onClick={()=>handleClick(800)}
            >
                About us
            </a>
            <a
                style={theme}
                onClick={()=>handleClick(1600)}
            >
                Events
            </a>
        </Box>
        <Box
            w="200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <button className="button" data-text="Awesome">
                <span className="actual-text">&nbsp;join us&nbsp;</span>
                <span aria-hidden="true" className="hover-text">
                &nbsp;join us&nbsp;</span>
            </button>

        </Box>
    </Box>
  )
}

export default Navbar