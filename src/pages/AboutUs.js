import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/Layout/Footer';
import NavBar from '../components/Layout/Navbar';
import { Helmet } from 'react-helmet';
import Titulli from '../components/Titulli';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AboutUs() {
  const sliderImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/img/web/slider1.jpg`, alt: 'Ping Pong 1' },
    { id: 2, src: `${process.env.PUBLIC_URL}/img/web/slider2.jpg`, alt: 'Ping Pong 2' },
    { id: 3, src: `${process.env.PUBLIC_URL}/img/web/slider3.jpg`, alt: 'Ping Pong 3' },
  ];

  return (
    <>
      <NavBar />
      <Helmet>
        <title>About Us | Sport Store</title>
      </Helmet>
      <Titulli titulli={'About Us'} />
      <section id="about-us" className="py-5">
        <Container>
          <h2 className="text-center mb-5">About Ping Pong</h2>
          <p className="lead text-center">
            Welcome to the world of <strong>Ping Pong</strong>, a sport that combines skill, strategy, and fun!
          </p>
          <p className="text-center">
            Ping Pong, also known as table tennis, is a beloved sport enjoyed by millions around the world. From casual play in basements
            and garages to competitive matches in professional arenas, ping pong has a rich history and a global following.
          </p>
          <h3 className="mt-5">History of Ping Pong</h3>
          <p>
            Ping Pong originated in England during the late 19th century as a parlor game for the upper class. Originally played with books
            as paddles and a golf ball, the game quickly evolved with the introduction of specialized equipment. The name "ping pong" comes
            from the sound made when the ball strikes the paddle and table.
          </p>
          <p>
            In 1901, John Jaques & Son Ltd, an English sports equipment manufacturer, trademarked the term "Ping Pong." The game continued to
            grow in popularity, leading to the formation of the International Table Tennis Federation (ITTF) in 1926. The first official
            World Championships were held in London in 1926.
          </p>
          <h3 className="mt-5">Why Play Ping Pong?</h3>
          <Row>
            <Col md={6}>
              <h4>Fun and Accessible</h4>
              <p>
                Ping Pong is a sport that can be enjoyed by people of all ages and skill levels. Whether you're playing for fun or in a
                competitive setting, it's a great way to stay active and socialize.
              </p>
              <h4>Improves Hand-Eye Coordination</h4>
              <p>
                The fast-paced nature of ping pong helps enhance hand-eye coordination and reflexes. Players need to react quickly to the
                ball, making it an excellent way to sharpen your skills.
              </p>
            </Col>
            <Col md={6}>
              <h4>Physical and Mental Benefits</h4>
              <p>
                Playing ping pong provides a full-body workout, improving cardiovascular health, flexibility, and muscle tone. It also
                stimulates mental acuity, requiring strategic thinking and quick decision-making.
              </p>
              <h4>Social Engagement</h4>
              <p>
                Ping Pong is a social sport that brings people together. Whether playing doubles or singles, it encourages interaction,
                teamwork, and friendly competition.
              </p>
            </Col>
          </Row>
          <h3 className="mt-5">Ping Pong in Popular Culture</h3>
          <Row className="mb-4 align-items-center justify-content-center">
            <Col sm={8}>
              <Image src={`${process.env.PUBLIC_URL}/img/web/pingpong_logo.jpg`} fluid alt="Ping Pong Logo" />
            </Col>
          </Row>
          <p className="text-center">
            Ping Pong has made its mark in popular culture, featured in movies, television shows, and even video games. Its universal
            appeal continues to grow, making it a timeless sport that captivates generations.
          </p>
        </Container>
      </section>
      <section id="pingpong-slider" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Ping Pong Highlights</h2>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ height: '300px' }} // Set height of the slider
          >
            {sliderImages.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.src} alt={image.alt} className="d-block w-100" style={{ height: '300px', width: '500px', objectFit: 'cover', margin: '0 auto' }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
