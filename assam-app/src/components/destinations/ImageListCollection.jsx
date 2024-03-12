import * as React from 'react';
import { useRef } from 'react';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem';
import Navbar from '../Navbar';
import DestinationsInfo from './DestinationsInfo';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import "../../App.css"

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}`,
      srcSet: `${image}`,
    };
}
const itemData = [
    {
      img: './kaziranga2.jpg',
      title: 'A sanctuary for wildlife enthusiasts:Kaziranga National Park.',
      rows: 2,
      cols: 2,
    },
    {
      img: 'majuli.jpg',
      title: 'Majuli: Where culture flows with the Brahmaputra.',
      rows: 2,
      cols: 2,
    },
    {
      img: 'shillong.jpg',
      title: 'Shillong: The abode of clouds and dreams',
      cols: 2,
    },
    {
      img: 'tea_center.jpg',
      title: 'Tocklai Tea Reasearch Institute',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'kakochang.jpg',
      title: 'Kakochang Waterfalls: Where serenity flows in abundance.',
    },
    {
      img: 'manas.jpg',
      title: 'Manas National Park',
    },
    {
      img: 'kamakhya.jpg',
      title: 'Kamakhya Temple',
      rows: 2,
      cols: 2,
    },
    {
      img: 'haflong.jpg',
      title: 'Haflong lake',
    },
    {
      img: 'umananda.jpg',
      title: 'Umananda Island and Temple',
    },
    {
      img: 'jorhat.jpg',
      title: 'Jorhat: A tapestry of tea gardens and tradition',
      cols: 2,
    },
  ];

function ImageListCollection() {
  
  const scrollRef = useRef(null);

  const scrollToRef = ()=>{
    scrollRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
  <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-full text-center destination-bg'>
      <Navbar/>
      <div className='z-50 w-full relative flex justify-center items-center'>
      <h1 className='text-white text-[90px] font-cursive mt-28'>Popular Destinations in Assam</h1>  
      </div>
      <KeyboardDoubleArrowDownIcon className="absolute z-50 top-96 text-white keep-bouncing" fontSize='large' onClick={scrollToRef}/>
    </div> 
    <ImageList
      sx={{ width: 1000, height: 750,margin:"32px 0px" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} className='relative group'>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            className='w-full'
          />
           <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 invisible group-hover:visible transition duration-300 ease-in-out font-poppins">
           <p class="text-center">{item.title}</p>
          </div>
        </ImageListItem>
      ))}
    </ImageList>
    
    <div ref={scrollRef}>
    <DestinationsInfo/>
    </div>
  </div>
  )
}

export default ImageListCollection