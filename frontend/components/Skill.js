import Link from "next/link";

const items = [
{
	id: 1,
	name: "PHP",
	image: "https://www.php.net/images/logos/new-php-logo.svg",
	value: "90"
	},
	{
	id: 2,
	name: "Laravel",
	image: "https://laravel.com/img/logomark.min.svg",
	value: "95"
	},
	{
	id: 3,
	name: "Server",
	image: "https://nginx.org/img/nginx_logo_dark.png",
	value: "85"
	},
	{
	id: 4,
	name: "WordPress",
	image: "https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png",
	value: "85"
	},
	{
	id: 5,
	name: "Git",
	image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
	value: "85"
	},
	{
	id: 6,
	name: "HTML",
	image: "https://www.w3.org/html/logo/downloads/HTML5_Badge.svg",
	value: "100"
	},
	{
	id: 7,
	name: "Bootstrap",
	image: "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg",
	value: "85"
	},
	{
	id: 8,
	name: "JS",
	image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
	value: "85"
	},
	{
	id: 9,
	name: "NextJS",
	image: "assets/images/skills/nextjs.svg",
	value: "75"
	},
	{
	id: 10,
	name: "ReactJS",
	image: "https://react.dev/images/brand/logo_light.svg",
	value: "75"
	},
	{
	id: 11,
	name: "Database",
	image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
	value: "85"
	},
	{
	id: 12,
	name: "Node.js",
	image: "https://nodejs.org/static/images/logo.svg",
	value: "70"
	},
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
					Expert in PHP Laravel, Next.js, Vue, and React, delivering scalable solutions for eCommerce, dashboards, server setups, and performance optimization. Let’s build something exceptional together!
                  </p>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
				<div className="skill-items-wrap">
					<div className="row">
					{items.map((item) => (
						<div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
							<div className="skill-item wow fadeInUp delay-0-2s">
								<img 
								src={item.image} 
								alt="Skill" 
								className="img-fluid fixed-size"  // Added class for fixed size
								/>
								<h5>{item.name}</h5>
								<span className="percent">{item.value}%</span>
							</div>
						</div>
					))}
					</div>
				</div>
			</div>

          </div>
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
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
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
