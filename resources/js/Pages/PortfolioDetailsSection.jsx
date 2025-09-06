import React, { useEffect } from "react";
import { usePage, Head } from "@inertiajs/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/css/main.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const PortfolioDetailsSection = ({ portfolio }) => {
  const { baseUrl } = usePage().props;

  return (
    <>
      <Head title={portfolio.title ? `${portfolio.title} | Portfolio Details` : "Portfolio Details"} />
      <main className="main">
        {/* Page Title */}
        <div className="page-title dark-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href={`${baseUrl}#portfolio`}>Home</a></li>
                <li className="current">Portfolio Details</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Portfolio Details Section */}
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-8">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  loop={true}
                  speed={600}
                  slidesPerView="auto"
                  className="portfolio-details-slider"
                >
                  {portfolio.detail_images && portfolio.detail_images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={`${baseUrl}/storage/app/public/${img.image_url}`}
                        alt=""
                        style={{
                          width: "100%",
                          maxHeight: "400px", // Adjust as needed
                          objectFit: "contain", // or "cover" if you prefer cropping
                          display: "block",
                          margin: "0 auto"
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination"></div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3>Project Information</h3>
                  <ul>
                    <li><strong>Project Name</strong>: {portfolio.title}</li>
                    <li><strong>Category</strong>: {portfolio.portfolio_type?.title}</li>
                    
                    {portfolio.client_name && (
                      <li><strong>Client</strong>: {portfolio.client_name}</li>
                    )}

                    {portfolio.project_url && (
                      <li><strong>Project URL</strong>: <a href={portfolio.project_url} target="_blank" rel="noopener noreferrer">{portfolio.project_url}</a></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row gy-4 mt-1">
              <div className="col-lg-8">
                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                    <h2>Project Features</h2>
                    <div dangerouslySetInnerHTML={{ __html: portfolio.description }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PortfolioDetailsSection;