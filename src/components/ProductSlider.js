import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';

import {Navigation, Pagination} from 'swiper'
import {products} from '../data';

import {HiPlus} from 'react-icons/hi';
const ProductSlider = () => {
  const { pages } = products
  return ( 
    <Swiper modules={[Pagination, Navigation]} pagination={{clickable: true}} navigation={true} className='productSlider min-h-[1300px]'>
      {pages.map((page, index) => {
        return (
           <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
              {page.productList.map((product, index) => {
                const {image, name, price, oldPrice} = product;
                return (
                  <div>
                    <div>
                      <img src={image.type} alt=''/>
                      <div>
                        <HiPlus className='text-xl text-primary'/>
                      </div>
                    </div>
                    <div>{name}</div>
                    <div>
                      <div>$ {price}</div>
                      <div>$ {oldPrice}</div>
                    </div>
                  </div>
                );
              })}
            </div>
           </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ProductSlider;
