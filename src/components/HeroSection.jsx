import hody1 from '../assets/images/1.png'
import hody2 from '../assets/images/2.png'
import hody3 from '../assets/images/3.png'

//===================Material UI=========================
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//=================Motion==================
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'


const Product = [
    {
        id:0,
        imgs:hody1,
        description:'Premium Cotton Black Hody',
        Category:'Classic Basics',
        cost:'949.99 L.E',
        cost2:'1199.99 L.E'
    },
    {
        id:1,
        imgs:hody2,
        description:'Premium Cotton Purple Hody',
        Category:'Classic Basics',
        cost:'949.99 L.E',
        cost2:'1199.99 L.E'
    },
    {
        id:2,
        imgs:hody3,
        description:'Premium Cotton White Hody',
        Category:'Classic Basics',
        cost:'949.99 L.E',
        cost2:'1199.99 L.E'
    },
]


export default function HeroSection() {
    return(
        <>
           <section id="featured-products-section" className="xl:h-185 h-350 md:h-180 lg:h-350  w-full mx-auto flex   flex-col items-start text-start ">
                <motion.div initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="w-full h-auto mt-10 mb-10 lg:flex-row flex-col flex justify-center text-center lg:justify-between items-center">
                    <div className="flex flex-col lg:ml-30">
                        <motion.h1 initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="text-main-color text-3xl lg:text-4xl font-bold mb-2">Featured Products</motion.h1>
                        <motion.p initial={{opacity:0 , y:100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className="text-gray-600 text-lg">Handpicked items just for you</motion.p>
                    </div>
                    <motion.a initial={{opacity:0 , y:-100}} animate={{opacity:1 , y:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} href="#" className="text-sm font-medium mr-30 text-blue-600 transition-all relative left-14 lg:left-0 duration-500 hover:duration-500 hover:underline flex flex-row">
                        View all
                        <ArrowForwardIcon className='ml-1' />
                    </motion.a>
                </motion.div>
                <div  className='flex flex-row gap-3  flex-wrap xl:flex-nowrap h-190 justify-center items-center  w-full'>
                {Product.map((Product, index) => (
                    <motion.div initial={{opacity:0 , x:-100}} animate={{opacity:1 , x:0}} transition={{duration:1 , ease:'easeOut' ,delay:index * 1}} key={Product.id}  className='flex flex-row justify-center   items-center w-full md:w-80 lg:w-100   [@media(min-width:2560px)]:w-140 h-auto lg:h-180'>
                        <div className='flex flex-col group'>
                            <div className='lg:h-100 w-50  relative h-50  bg-gray-100 flex flex-col gap-4 lg:w-90  rounded-lg overflow-hidden mb-4 cursor-pointer hover:duration-500 duration-500'>
                                <div className='h-80 rounded-lg overflow=hidden mb-10 justify-center items-center hover:scale-110 duration-500 transition hover:duration-500'>
                                    <img src={Product.imgs} alt="" />
                                </div>
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-2 rounded">-20%</div>
                            </div> 
                            <motion.h3 initial={{opacity:0 , x:-100}} animate={{opacity:1 , x:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className='font-semibold text-main-color ml-2 mb-1'>{Product.description}</motion.h3>
                            <motion.p initial={{opacity:0 , x:-100}} animate={{opacity:1 , x:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.9}} className='text-sm text-gray-500 mb-2 ml-2'>{Product.Category}</motion.p>
                            <div className='flex items-center space-x-2 ml-2'>
                                <motion.span initial={{opacity:0 , x:-100}} animate={{opacity:1 , x:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.5}} className='text-lg font-bold text-main-color'>{Product.cost}</motion.span>
                                <motion.span initial={{opacity:0 , x:100}} animate={{opacity:1 , x:0}} transition={{duration:1 , ease:'easeOut' ,delay:0.9}} className="text-sm text-gray-400 line-through">{Product.cost2}</motion.span>
                            </div>                                
                        </div>
                    </motion.div>
                ))}
                </div>             
            </section>
        </>
    )
}