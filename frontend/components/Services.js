import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
	{
		id: 1,
		title: 'eCommerce Solutions',
		text: 'Building fully functional eCommerce platforms with features like secure payment gateways, inventory management, and dynamic product galleries to deliver seamless shopping experiences.',
	},
	{
		id: 2,
		title: 'News and Blogging Platforms',
		text: 'Creating user-friendly and SEO-optimized platforms for news and blogging, with advanced content management systems, social media integrations, and responsive designs for all devices.',
	},
	{
		id: 3,
		title: 'Customized Dashboard Development',
		text: 'Designing interactive and feature-rich dashboards tailored for project management, analytics, and operational workflows to streamline business processes.',
	},
	{
		id: 4,
		title: 'Image Processing & Performance Optimization',
		text: 'Implementing advanced image optimization techniques and performance enhancements to ensure faster load times and high-quality visuals across all devices.',
	},
	{
		id: 5,
		title: 'Server Configuration & Deployment',
		text: 'Setting up secure and scalable servers with technologies like Apache, Nginx, Docker, and CI/CD pipelines for efficient deployment and smooth operations.',
	},
	{
		id: 6,
		title: 'Portfolio Websites',
		text: 'Crafting visually stunning portfolio websites with interactive designs, optimized media handling, and responsive layouts to showcase creative works effectively.',
	},
  ];
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>
                My <span>Special Service</span> For your Business Development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id >= 9 ? service.id : `0${service.id}`}.
                </div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Services;

export const Services2 = () => {
  return (
    <section
      id="services"
      className="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> my services area
              </span>
              <h2>MY SERVICE AREA</h2>
            </div>
          </div>
        </div>
        <div className="services-two-wrap">
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service1.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">WEBSITE DEvelopment</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service2.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Digital Marketing</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service3.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Front End DEvelopment</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service4.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Joomla redesigning</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="services-more-btn text-center pt-55 wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="services" className="theme-btn">
            Get more services
          </Link>
        </div>
      </div>
    </section>
  );
};
