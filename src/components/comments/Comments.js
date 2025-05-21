import React from 'react';
import Title from '../Title';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './comments.css';
import '../../index.css';
import aleksey from '../../images/aleksey.png';
import aziza from '../../images/aziza.png';
import jake from '../../images/jake.png';
import daisy from '../../images/daisy.png';
import ch from '../../images/ch.png';
const testimonials = [
  {
    quote:
      'Foydalanuvchilarga qulay va tez ishlaydi. Globance orqali ish topishim ancha osonlashdi.',
    name: 'Aziza Abdurahmonova',
    role: 'Dizayner, Toshkent',
    img: aziza,
  },
  {
    quote:
      'Очень удобное приложение для иностранных специалистов. Я смог найти клиентов за неделю.',
    name: 'Алексей Громов',
    role: 'Бизнес-консультант, Москва',
    img: aleksey,
  },
  {
    quote:
      'Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!',
    name: 'Daisy Phelps',
    role: 'Digital Marketing Director',
    img: daisy,
  },
  {
    quote:
      '使用起来非常方便，对外籍人士来说非常友好。我通过平台找到了合适的商业服务。',
    name: '李明',
    role: '跨境电商创始人',
    img: ch,
  },
  {
    quote:
      'Through Globance, I connected with professionals from 3 countries within days. Excellent networking potential.',
    name: 'Jake Thompson',
    role: 'Freelance Developer, UK',
    img: jake,
  },
];

function Comments() {
  return (
    <section className="section testimonials" id="testimonials">
      <Title title="We Believe" subTitle="people we trust" />

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <span className="quote-mark">“</span>
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <img src={item.img} alt={item.name} className="author-img" />
                  <div>
                    <h4 className="testimonial-name">{item.name}</h4>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Comments;
