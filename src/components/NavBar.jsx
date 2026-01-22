// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import logo from '../assets/icons/93ad3f35-081d-4fb1-ba6f-7df59ed16465-image.png'
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';


export default function NavBar() {
const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
`;
    
const drawerWidth = 240;
const [open, setOpen] = useState(false);
const handleDrawerOpen = () => {
  setOpen(true);
};
const handleDrawerClose = () => {
  setOpen(false);
  };
    return(
        <>
            <motion.nav initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="flex flex-row w-full  items-center justify-between gap-8 bg-white/20  backdrop-blur-xl border  border-white/30  p-8 shadow-2xl  sticky top-0 h-[72px] z-50">
                <div className='text-gray-700  flex-row items-center  flex text-xl '>
                    <button className={open === true ? 'hidden'  :  'lg:hidden flex justify-center -ml-4 items-center'} onClick={handleDrawerOpen}  >
                        <MenuIcon />
                    </button>
                    <motion.img initial={{opacity:0 , x:-100}} animate={{opacity:1 , x:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} src={logo} alt="boltx logo" className='w-12 h-12 ml-7' />
                    <div className='hidden lg:flex  flex-row w-full gap-6 relative left-170 justify-center items-center'>
                        <motion.a initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} href="#" className='cursor-pointer hover:text-purple-800 duration-500 transition-all hover:duration-500'>Home</motion.a>
                        <motion.a initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.9}} href="#" className='cursor-pointer hover:text-purple-800 duration-500 transition-all hover:duration-500'>New Arrival</motion.a>
                        <motion.a initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:1}} href="#" className='cursor-pointer hover:text-purple-800 duration-500 transition-all hover:duration-500'>Contact</motion.a>
                        <motion.a initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:1.2}} href="#" className='cursor-pointer hover:text-purple-800 duration-500 transition-all hover:duration-500'>Support</motion.a>
                    </div>
                </div>
                <div className='flex flex-row mr-5 gap-4 relative left-11.25 md:left-0 xl:left-0'>
                    <motion.button initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className='bg-transparent border-main-color w-19 h-10  border-2 text-main-color rounded-md cursor-pointer hover:bg-main-color hover:text-white duration-500 hover:duration-500 transition-all'>LogIn</motion.button>
                    <motion.button initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className='bg-main-color border-main-color w-19 h-10  border-2 text-white rounded-md cursor-pointer hover:bg-white hover:text-main-color duration-500 hover:duration-500 transition-all'>SignIn</motion.button>
                </div>
            </motion.nav>
                <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="left"
                
                open={open}
                >
                <IconButton className='flex justify-between gap-29  font-bold text-black'>Menu <CloseIcon className='text-red-800' onClick={handleDrawerClose}/></IconButton>

                <Divider  className='mb-6'/>
                <List className='w-full h-1200 text-start flex flex-col gap-3 '>
                    <ListItem disablePadding className='flex flex-col gap-6 text-start items-start '>
                        <span className="text-white text-lg transition ml-12 w-full text-start rounded hover:text-purple-800 font-medium cursor-pointer">Home</span>
                        <span className="text-white text-lg transition ml-12 w-full text-start rounded hover:text-purple-800 font-medium cursor-pointer">New Arrival</span>
                        <span className="text-white text-lg transition ml-12 w-full text-start rounded hover:text-purple-800 font-medium cursor-pointer">Contact</span>
                        <span className="text-white text-lg transition ml-12 w-full text-start rounded hover:text-purple-800 font-medium cursor-pointer">Support</span>
                    </ListItem>
                    <Divider />
                </List>
                </Drawer>
        </>
    )
}