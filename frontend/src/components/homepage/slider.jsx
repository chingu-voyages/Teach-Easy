import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import section2Image from './../../assets/home-section2.jpg';

export default function Slider() {
  const elements = [
    {
      background: 'bg-violet-300/50',
      title: 'Learn Anytime Anywhere',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut consequuntur, optio sed vero vitae beatae nisi!',
      image: section2Image,
    },
    {
      background: 'bg-orange-300/50',
      title: 'Learn Anytime Anywhere1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut consequuntur, optio sed vero vitae beatae nisi!',
      image: section2Image,
    },
    {
      background: 'bg-blue-300/50',
      title: 'Learn Anytime Anywhere2',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut consequuntur, optio sed vero vitae beatae nisi!',
      image: section2Image,
    },
  ];

  return (
    <div className="slider w-full">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        loop={true}
        loopedSlides={1}
        spaceBetween={0}
        autoplay={{
          delay: 10000,
          reverseDirection: true,
          pauseOnMouseEnter: false,
        }}
      >
        {elements.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={elements[index].background}>
                <div className="container px-5 m-auto lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] h-full">
                  <div className="w-full flex flex-wrap gap-[10%] py-16 items-center justify-center md:justify-between">
                    <div className="content w-full md:w-[50%] md:order-2 text-center">
                      <h1 className="text-slate-900 font-black text-5xl sm:text-4xl md:text-left lg:text-5xl tracking-tight text-center dark:text-white">
                        {elements[index].title}
                      </h1>
                      <p className="my-6 text-lg lg:text-xl text-slate-600 text-center md:text-left max-w-3xl mx-auto dark:text-slate-400">
                        {elements[index].desc}
                      </p>
                    </div>
                    <div className="mt-6 md:mt-0 image md:w-[40%] md:order-1">
                      {/*The images here will be screenshots of the app to show users all the features*/}
                      <img src={elements[index].image} alt="features" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
