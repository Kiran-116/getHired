import React, { useState } from 'react';
import './Home.css'; // Import the CSS file for styles (create this file in the same folder)

const Home = () => {
  const images = [
    'https://i.postimg.cc/Xq5LxKr6/JOB.jpg',
    'https://i.postimg.cc/qvwLmvvq/job1.jpg',
    'https://i.postimg.cc/NMt9H1Rz/jobi.jpg',
  ];

  const companies = [
    'https://i.postimg.cc/Vk1k4YJJ/amazon.png',
    'https://i.postimg.cc/W4Yp2gXZ/google.png',
    'https://i.postimg.cc/jj735rhh/flipkart.jpg',
    'https://i.postimg.cc/FRXWknWX/micro.png',
    'https://i.postimg.cc/QCpSsgZC/microsoft.png',
    'https://i.postimg.cc/rFLkJY3T/infosys.png',
    'https://i.postimg.cc/yxBv1CwF/samsung.png',
    'https://i.postimg.cc/SK5qJzC6/walmart.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Replace this with your actual job offer data
const articles = [
  {
    work: "Full Stack",
    company: "Grace Kay",
    place: "Work from Home",
    stipend: "10,000/month",
    duration: "6 months",
  },
  {
    work: "Frontend Developer",
    company: "Tech Solutions",
    place: "Remote",
    stipend: "8,000/month",
    duration: "3 months",
  },
  {
    work: "Software Engineer",
    company: "Innovative Tech",
    place: "New York",
    stipend: "12,000/month",
    duration: "9 months",
  },
  // Add more articles if needed
];
  return (
    <div className="home-container">
      <div className="slideshow-container">
        <div
          className="slides"
          style={{ "--translate-x": `calc(-${currentIndex * 100}vw)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ height: '600px' }}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="arrow-buttons">
        <button onClick={prevSlide}>&#8249;</button>
        <button onClick={nextSlide}>&#8250;</button>
      </div>

      <div className="company-icons">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company}
            alt={`Company ${index + 1}`}
            className={`company-icon ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <h2 className="recent-job-offers-heading">Recent Job Offers</h2>
      <div className="card-row-container">
        <div className="card-container">
          {/* Sample data for job offers */}
          {/* Replace this with your actual job offer data */}
          {articles.map((article, index) => (
            <div key={index} className="card">
              <h3 className="work">{article.work}</h3>
              <p className="company">{article.company}</p>
              <hr />
              <div className="card-details">
                <p><i className="fas fa-home"></i> {article.place}</p>
                <p><i className="fas fa-money-bill-alt"></i> {article.stipend}</p>
                <p><i className="fas fa-calendar-alt"></i> {article.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;




// // Home.js
// import React, { useState, useEffect } from 'react';
// import './Home.css'; // Import the CSS file for styles (create this file in the same folder)
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TextOverlay = ({ currentIndex }) => {
//   const text = "Get Hired Today Itself!";
//   const [typedText, setTypedText] = useState('');

//   useEffect(() => {
//     let mounted = true;
//     let typingIndex = 0;

//     const typeText = () => {
//       if (mounted && typingIndex <= text.length) {
//         setTypedText(text.substring(0, typingIndex));
//         typingIndex++;
//         setTimeout(typeText, 100); // Adjust the typing speed here (milliseconds)
//       }
//     };

//     typeText();

//     return () => {
//       mounted = false;
//     };
//   }, [currentIndex]);

//   return <div className="overlay-text">{typedText}</div>;
// };

// const Home = () => {
//   const images = [
//     'https://i.postimg.cc/Xq5LxKr6/JOB.jpg',
//     'https://i.postimg.cc/qvwLmvvq/job1.jpg',
//     'https://i.postimg.cc/NMt9H1Rz/jobi.jpg',
//   ];

//   const companies = [
//     'https://i.postimg.cc/Vk1k4YJJ/amazon.png',
//     'https://i.postimg.cc/W4Yp2gXZ/google.png',
//     'https://i.postimg.cc/jj735rhh/flipkart.jpg',
//     'https://i.postimg.cc/W4Yp2gXZ/google.png',
//     'https://i.postimg.cc/Vk1k4YJJ/amazon.png',
//     'https://i.postimg.cc/jj735rhh/flipkart.jpg',
//     'https://i.postimg.cc/jj735rhh/flipkart.jpg',
//     'https://i.postimg.cc/jj735rhh/flipkart.jpg',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const articles = [
//     {
//       work: "Full Stack",
//       company: "Grace Kay",
//       place: "Work from Home",
//       stipend: "10,000/month",
//       duration: "6 months",
//     },
//     {
//       work: "Frontend Developer",
//       company: "Tech Solutions",
//       place: "Remote",
//       stipend: "8,000/month",
//       duration: "3 months",
//     },
//     {
//       work: "Software Engineer",
//       company: "Innovative Tech",
//       place: "New York",
//       stipend: "12,000/month",
//       duration: "9 months",
//     },
//     // {
//     //   work: "Software Engineer",
//     //   company: "Innovative Tech",
//     //   place: "New York",
//     //   stipend: "12,000/month",
//     //   duration: "9 months",
//     // },
//     // Add more articles if needed
//   ];

//   return (
//     <div className="home-container">
     

//       <div className="slideshow-container">
//         <div
//           className="slides"
//           style={{ "--translate-x": `calc(-${currentIndex * 100}vw)` }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
//               <img src={image} alt={`Image ${index + 1}`} />
//               {index === currentIndex && <TextOverlay currentIndex={currentIndex} />}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="arrow-buttons">
//         <button onClick={prevSlide}>&#8249;</button>
//         <button onClick={nextSlide}>&#8250;</button>
//       </div>

//       <div className="company-icons">
//         {companies.map((company, index) => (
//           <img
//             key={index}
//             src={company}
//             alt={`Company ${index + 1}`}
//             className="company-icon"
//           />
//         ))}
//       </div>
//       {/* <h2 className="recent-job-offers-heading">Recent Job Offers</h2> */}
//       <div className="card-row-container">
//         <div className="card-container">
//           {articles.map((article, index) => (
//             <div key={index} className="card">
//               <h3 className="work">{article.work}</h3>
//               <p className="company">{article.company}</p>
//               <hr />
//               <div className="card-details">
//                 <p><i className="fas fa-home"></i> {article.place}</p>
//                 <p><i className="fas fa-money-bill-alt"></i> {article.stipend}</p>
//                 <p><i className="fas fa-calendar-alt"></i> {article.duration}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useState, useEffect } from 'react';
// import './Home.css'; // Import the CSS file for styles (create this file in the same folder)

// const Home = () => {
//   const images = [
//     'https://i.postimg.cc/Xq5LxKr6/JOB.jpg',
//     'https://i.postimg.cc/qvwLmvvq/job1.jpg',
//     'https://i.postimg.cc/NMt9H1Rz/jobi.jpg',
//   ];

//   const companies = [
//     'https://i.postimg.cc/Vk1k4YJJ/amazon.png',
//     'https://i.postimg.cc/W4Yp2gXZ/google.png',
//     'https://i.postimg.cc/jj735rhh/flipkart.jpg',
//     'https://i.postimg.cc/FRXWknWX/micro.png',
//     'https://i.postimg.cc/QCpSsgZC/microsoft.png',
//     'https://i.postimg.cc/rFLkJY3T/infosys.png',
//     'https://i.postimg.cc/yxBv1CwF/samsung.png',
//     'https://i.postimg.cc/SK5qJzC6/walmart.png',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     // Function to move the icons along with the slideshow images
//     const interval = setInterval(nextSlide, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <>
//       <div className="slideshow-container">
//         <div
//           className="slides"
//           style={{ "--translate-x": `calc(-${currentIndex * 100}vw)` }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Image ${index + 1}`}
//               className={`slide ${index === currentIndex ? 'active' : ''}`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className={`arrow-buttons ${currentIndex === 0 ? 'hidden' : ''}`}>
//         <button onClick={prevSlide}>&#8249;</button>
//         <button onClick={nextSlide}>&#8250;</button>
//       </div>
//       <div className={`company-icons ${currentIndex === 0 ? 'move-row' : ''}`}>
//         {companies.map((company, index) => (
//           <img
//             key={index}
//             src={company}
//             alt={`Company ${index + 1}`}
//             className={`company-icon ${index === currentIndex ? 'active' : ''}`}
//             style={{ "--translate-x-icon": `calc(-${currentIndex * 60}px - ${index * 60}px)` }}
//           />
//         ))}
//       </div>
//       <div>HElllo</div>
//       <div style={{ backgroundColor: 'pink', color: 'black', textAlign: 'center' }}>
//         HELOOOO JIIIIIIII
//       </div>
//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import './Home.css'; // Import the CSS file for styles (create this file in the same folder)

// const Home = () => {
//   const images = [
//     'https://i.postimg.cc/Xq5LxKr6/JOB.jpg',
//     'https://i.postimg.cc/qvwLmvvq/job1.jpg',
//     'https://i.postimg.cc/NMt9H1Rz/jobi.jpg',
//   ];

//   const companies = [
//     'https://i.postimg.cc/Vk1k4YJJ/amazon.png',
//     'https://i.postimg.cc/W4Yp2gXZ/google.png',
//     'https://i.postimg.cc/jj735rhh/flipkart.jpg',
//     'https://i.postimg.cc/FRXWknWX/micro.png',
//     'https://i.postimg.cc/QCpSsgZC/microsoft.png',
//     'https://i.postimg.cc/rFLkJY3T/infosys.png',
//     'https://i.postimg.cc/yxBv1CwF/samsung.png',
//     'https://i.postimg.cc/SK5qJzC6/walmart.png',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     // Function to move the icons along with the slideshow images
//     const interval = setInterval(nextSlide, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <>
//       <div className="slideshow-container">
//         <div
//           className="slides"
//           style={{ "--translate-x": `calc(-${currentIndex * 100}vw)` }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Image ${index + 1}`}
//               className={`slide ${index === currentIndex ? 'active' : ''}`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="arrow-buttons">
//         <button onClick={prevSlide}>&#8249;</button>
//         <button onClick={nextSlide}>&#8250;</button>
//       </div>
//       <div className="company-icons">
//         {companies.map((company, index) => (
//           <img
//             key={index}
//             src={company}
//             alt={`Company ${index + 1}`}
//             className={`company-icon ${index === currentIndex ? 'active' : ''}`}
//             style={{ "--translate-x-icon": `calc(-${currentIndex * 60}px - ${index * 60}px)` }}
//           />
//         ))}
//       </div>
//       <div>HElllo</div>
//       <div style={{ backgroundColor: 'pink', color: 'black', textAlign: 'center' }}>
//         HELOOOO JIIIIIIII
//       </div>
//     </>
//   );
// };

// export default Home;



