// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// const Works = () => {
//   const experienceData = [
//     {
//       company: 'Tejas Networks',
//       role: 'Product Verification Engineer',
//       duration: '2022 - Present',
//       description: 'Testing and verifying software components in networking systems.',
//     },
//     {
//       company: 'Oracle',
//       role: 'Site Reliability Engineer Intern',
//       duration: '2021 - 2022',
//       description: 'Improved system reliability in the Oracle Cloud Observability and Management platform.',
//     },
//     {
//       company: 'XYZ University',
//       role: 'Software Development Intern',
//       duration: '2020 - 2021',
//       description: 'Developed key modules for an online learning platform using Java and Spring Boot.',
//     },
//   ];

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center' }}>Experience</h2>
//       <VerticalTimeline layout="2-columns">
//   {experienceData.map((exp, index) => (
//     <VerticalTimelineElement
//       key={index}
//       date={exp.duration}
//       iconStyle={{ background: '#6A1B9A', color: '#fff' }}
//       contentStyle={{
//         background: '#f0f0f0',
//         color: '#333',
//         boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.15)',
//         borderRadius: '10px',
//         padding: '15px',
//         width: '300px',
//       }}
//       contentArrowStyle={{ borderRight: '7px solid #6A1B9A' }}
//     >
//       <h3 style={{ marginBottom: '10px', color: '#6A1B9A' }}>{exp.role}</h3>
//       <h4 style={{ marginBottom: '10px', fontWeight: 'normal' }}>{exp.company}</h4>
//       <p>{exp.description}</p>
//     </VerticalTimelineElement>
//   ))}
// </VerticalTimeline>

//     </div>
//   );
// };

// export default Works;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import './works.css'; // Custom CSS file for styling

const Works = () => {
  const experienceData = [
    {
      company: 'Tejas Networks',
      role: 'R&D Intern',
      duration: 'Jan - July 2024',
      description: 'Testing and verifying software components in networking systems.',
    },
    {
      company: 'Oracle',
      role: 'Site Reliability Engineer Intern',
      duration: '2021 - 2022',
      description: 'Improved system reliability in Oracle Cloud Observability and Management platform.',
    },
    {
      company: 'XYZ University',
      role: 'Software Development Intern',
      duration: '2020 - 2021',
      description: 'Developed key modules for an online learning platform using Java and Spring Boot.',
    },
    {
      company: 'Startup ABC',
      role: 'Frontend Developer',
      duration: '2019 - 2020',
      description: 'Designed and implemented web applications using React and Redux.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <h2>Experience</h2>
      <Slider {...settings}>
        {experienceData.map((exp, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              <span className="carousel-duration">{exp.duration}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Works;

