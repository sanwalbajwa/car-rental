import Header from './components/Header';

export default function Page() {
  return (
    <>
    <Header/>
    <div id="hero" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#hero" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#hero" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#hero" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/bmw.jpg" className="d-block w-100" alt="banner 2" />
            <div className="carousel-caption d-none d-lg-block">
              <h5>Find the Perfect Ride for Every Journey</h5>
              <p>
                Discover a wide range of cars tailored to suit your travel needs. Whether it’s a quick city drive or a long road trip, we’ve got you covered with flexible booking options and affordable rates.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/porche.jpg" className="d-block w-100" alt="banner 2" />
            <div className="carousel-caption d-none d-lg-block">
              <h5>Your Next Adventure Awaits</h5>
              <p>
              Choose from our diverse fleet of reliable vehicles. Rent with ease, enjoy seamless bookings, and hit the road with confidence—anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/mercedez.jpg" className="d-block w-100" alt="banner 3" />
            <div className="carousel-caption d-none d-lg-block">
              <h5>Drive Your Dreams Today</h5>
              <p>
              Explore our extensive selection of dependable vehicles tailored to your needs. Experience hassle-free rentals, effortless reservations, and embark on your journey with peace of mind—whenever and wherever you choose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-6rem about-us'>
        <div className="row">
          <div className="col-md-5">
            <img src="/images/about-us.jpg" className="img-fluid" alt="about" />
          </div>
          <div className="col-md-6">
            <div className='ps-0 p-5'>
              <h2 className="display-5 fw-bold text-uppercase mb-3">About <span style={{ color: '#9e8464' }}>Us</span></h2>
              <p className="para">We are a car rental company that offers a wide range of vehicles to suit your travel needs. Whether you need a compact car for city driving or a spacious SUV for family trips, we have the perfect vehicle for you. Our cars are well-maintained and equipped with the latest features to ensure a comfortable ride. With flexible booking options and affordable rates, we make it easy for you to find the perfect ride for every journey.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-6rem services'>
        <div className="row">
          <div className="col-md-6">
            <div className='ps-0 p-5'>
              <h2 className="display-5 fw-bold text-uppercase mb-3">Choose us for <span style={{ color: '#9e8464' }}>best services</span></h2>
              <p className="para">We are dedicated to providing exceptional service, ensuring that every journey is memorable. Our team is committed to understanding your needs and delivering tailored solutions. With a focus on quality and comfort, we strive to create an experience that exceeds your expectations. Our facilities are designed to offer convenience and ease, allowing you to enjoy your time with us. We believe in fostering a welcoming environment where every detail matters. Trust us to make your experience seamless and enjoyable.</p>
            </div>
          </div>
          <div className="col-md-5 pt-5">
            <img src="/images/service.jpg" className="img-fluid" alt="about" />
          </div>
        </div>
      </div>
      <div className='container pt-4 pb-4 services' style={{ backgroundColor: '#f8f9fa' }}>
        <div className="row">
          <div className="pb-5 col-10 col-sm-8 col-lg-6">
            <div className='ps-0 p-5'>
              <h2 className="display-5 fw-bold text-uppercase mb-3">See <span style={{ color: '#9e8464' }}>best services</span> for your solution</h2>
            </div>
          </div>
          <div className="pb-5 pt-4 col-lg-6">
          <p className="para pt-4">Our offerings are designed to provide exceptional value and support. Experience seamless integration and outstanding performance with our services. We prioritize your satisfaction and strive to deliver results that exceed expectations. Whether you’re looking for innovative strategies or reliable support, we have the expertise to help you succeed.</p>
          </div>
        </div>
      </div>
      <div className="container mt-6rem mb-6rem">
      <div className="row text-center">
        {/* Icon Box 1: Car */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="icon-box">
            <i className="fas fa-car fa-3x mb-3"></i>
            <h5 className="fw-bold text-dark mb-0">Car Rentals</h5>
            <p className="text-secondary mb-0 pt-2">Choose from a wide range of vehicles to suit your needs.</p>
          </div>
        </div>

        {/* Icon Box 2: Collection */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="icon-box">
            <i className="fas fa-th-list fa-3x mb-3"></i> {/* Collection icon */}
            <h5 className="fw-bold text-dark mb-0">Vehicle Collection</h5>
            <p className="text-secondary mb-0 pt-2">Explore our diverse collection of cars available for rent.</p>
          </div>
        </div>

        {/* Icon Box 3: Money */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="icon-box">
            <i className="fas fa-dollar-sign fa-3x mb-3"></i>
            <h5 className="fw-bold text-dark mb-0">Affordable Pricing</h5>
            <p className="text-secondary mb-0 pt-2">Enjoy competitive rates and transparent pricing.</p>
          </div>
        </div>

        {/* Icon Box 4: Comment */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="icon-box">
            <i className="fas fa-comments fa-3x mb-3"></i>
            <h5 className="fw-bold text-dark mb-0">Customer Support</h5>
            <p className="text-secondary mb-0 pt-2">Our team is here to assist you with any questions or concerns.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="container mt-6rem">
      <h2 className="display-5 fw-bold text-uppercase text-center pb-5">great cars rental &<span style={{ color: '#9e8464' }}> Limousine Services</span></h2>
      <div className="car-row row">
        <div className="col-lg-4 text-center text-uppercase">
          <img src="/images/rental-1.jpg" className="img-fluid" alt="rental" />
          <h3>Hyundai</h3>
        </div>
        <div className="col-lg-4 text-center text-uppercase">
          <img src="/images/rental-2.jpg" className="img-fluid" alt="rental" />
          <h3>Jeep</h3>
        </div>
        <div className="col-lg-4 text-center text-uppercase">
          <img src="/images/rental-3.jpg" className="img-fluid" alt="rental" />
          <h3>BMW</h3>
        </div>
      </div>
      <div className="car-row row">
        <div className="col-lg-4 text-center text-uppercase">
          <img src="/images/rental-4.jpg" className="img-fluid" alt="rental" />
          <h3>Benz</h3>
        </div>
        <div className="col-lg-4 text-center text-uppercase">
          <img src="/images/rental-5.jpg" className="img-fluid" alt="rental" />
          <h3>Ford</h3>
        </div>
        <div className="col-lg-4 text-center text-uppercase">
          <img src="/images/rental-6.jpg" className="img-fluid" alt="rental" />
          <h3>Range Rover</h3>
        </div>
      </div>
      </div>
      <div className="container pt-4 pb-4" style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className="display-5 fw-bold text-uppercase text-center pb-5">Process for<span style={{ color: '#9e8464' }}> Renting a Car</span></h2>
      <div className="row">
        {/* Box 1 */}
        <div className="col-lg-3 col-md-6">
          <div className="card home-card">
            <div className="card-body">
              <h3>01</h3>
              <h5 className="fw-bold text-dark mb-0">Choose a Vehicle</h5>
              <p className="text-secondary mb-0 mt-2">Select the vehicle that best suits your needs. Whether you prefer a compact car for city driving or a spacious SUV for family trips, we have a wide range of options available. Our vehicles are well-maintained and equipped with the latest features to ensure a comfortable ride.</p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-lg-3 col-md-6">
          <div className="card home-card">
            <div className="card-body">
              <h3>02</h3>
              <h5 className="fw-bold text-dark mb-0">Pick Location & Date</h5>
              <p className="text-secondary mb-0 mt-2">Choose your preferred pickup location and the dates for your rental. We offer convenient pickup points at airports, train stations, and city centers. Make sure to select the date and time that works best for you to ensure a smooth rental experience.</p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-lg-3 col-md-6">
          <div className="card home-card">
            <div className="card-body">
              <h3>03</h3>
              <h5 className="fw-bold text-dark mb-0">Book your car</h5>
              <p className="text-secondary mb-0 mt-2">Once you have selected your vehicle and pickup details, proceed to book your car. Fill in your personal information and payment details to complete the reservation. Our booking process is quick and secure, ensuring your information is protected.</p>
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="col-lg-3 col-md-6">
          <div className="card home-card">
            <div className="card-body">
              <h3>04</h3>
              <h5 className="fw-bold text-dark mb-0">Finish process</h5>
              <p className="text-secondary mb-0 mt-2">After booking, you will receive a confirmation email with all the details of your rental. Review the information carefully and keep it for your records. If you have any questions or need to make changes, feel free to contact our customer service team for assistance.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="fixed bg-container mt-6rem">
        <div className="content">
          <h1 className="heading display-5 fw-bold text-uppercase text-white mb-2">CONTACT INFO</h1>
          <p className="para text-white">We understand that every journey is unique. That's why we offer a diverse fleet of vehicles, from compact cars for city driving to spacious SUVs for family adventures. Our cars are meticulously maintained and equipped with the latest features to ensure a safe and enjoyable ride.</p>
          <h3 className='display-5 text-white mb-2'>Call us (99) 124 1242 12</h3>
          <button className="btn btn-primary rounded-0 mt-5 p-3 ps-5 pe-5">Get Started</button>
        </div>
      </div>
      <div className='container mt-6rem mb-6rem d-flex flex-column align-items-center'>
        <h2 className="display-5 fw-bold text-uppercase text-center pb-5">We’ve got<span style={{ color: '#9e8464' }}> answers</span></h2>
        <div className="accordion accordion-flush w-6" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              What documents do I need to rent a car?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">To rent a car, you typically need a valid driver's license, a credit card in your name, and proof of insurance. Some rental companies may also require an additional form of identification, such as a passport or utility bill. Please check with your specific rental agency for their requirements.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              How are rental prices calculated?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Rental prices are calculated based on several factors, including the type of vehicle, rental duration, and any additional services or insurance options you choose. Prices may vary based on demand, location, and time of booking. We recommend checking our website for the most accurate pricing and any ongoing promotions.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Can I return the car to a different location?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes, many rental companies offer the option to return the car to a different location, often referred to as a "one-way rental." However, additional fees may apply for this service. Please inform us at the time of booking if you plan to return the vehicle to a different location, so we can provide you with the necessary details and pricing.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}