import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { feedbacks } from "../data/data";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      {/* testimonial slider */}
      <div className="w-full">
        {/* slider */}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
        >
          {/* single slide */}
          {feedbacks?.map((feedback, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard feedback={feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* slider controller button */}
      <div className="mt-8 flex items-center justify-center gap-10 text-[#485256] text-2xl">
        {/* prev button */}
        <button className="swiper-button-prev">
          <MdOutlineKeyboardArrowLeft />
        </button>

        {/* next button */}
        <button className="swiper-button-next">
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </>
  );
};

export default Testimonial;
