import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const partnerLogos = [
    'https://hamtinfotech.com/wp-content/uploads/2025/03/sugarcrm-logo-1-1.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/02/SAP-silver-partner-logo.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/02/SAGE-logo.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/03/Smart-Soft-logo-new.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/02/Microsoft-logo.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/02/Boyoum-it-logo.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/02/Eramba-logo.png',
    'https://hamtinfotech.com/wp-content/uploads/2025/02/Automation-anywhere-logo.png',
  ];
  
  export default function PartnersSlider() {
    return (
      <div className="w-full py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={7}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 7,
            },
          }}
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-8 mx-auto object-contain filter transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
