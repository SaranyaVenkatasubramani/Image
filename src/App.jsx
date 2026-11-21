
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const wonders = [
    {
      name: "THE GREAT WALL",
      country: "CHINA",
      description: "An extraordinary ancient structure stretching across China's historic landscapes.",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600"
    },
    {
      name: "PETRA",
      country: "JORDAN",
      description: "The magnificent rose-red city carved into the sandstone cliffs.",
      image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=1600"
    },
    {
      name: "CHRIST THE REDEEMER",
      country: "BRAZIL",
      description: "A breathtaking monument overlooking the beautiful city of Rio de Janeiro.",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1600"
    },
    {
      name: "MACHU PICCHU",
      country: "PERU",
      description: "An ancient Incan city surrounded by the spectacular Andes mountains.",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600"
    },
    {
      name: "CHICHEN ITZA",
      country: "MEXICO",
      description: "A remarkable Mayan archaeological masterpiece with a legendary pyramid.",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1600"
    },
    {
      name: "THE COLOSSEUM",
      country: "ITALY",
      description: "An iconic Roman amphitheatre representing the power of ancient Rome.",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600"
    },
    {
      name: "THE TAJ MAHAL",
      country: "INDIA",
      description: "A timeless marble masterpiece and an eternal symbol of love.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % wonders.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + wonders.length) % wonders.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="website">

      <nav className="navbar">
        <h2>WONDERS.</h2>
        <p>EXPLORE THE EXTRAORDINARY</p>
      </nav>

      <section className="hero">

        <p className="tagline">A JOURNEY THROUGH HISTORY</p>

        <h1>
          SEVEN WONDERS.
          <span> ENDLESS STORIES.</span>
        </h1>

        <div className="carousel">

          <img
            src={wonders[currentIndex].image}
            alt={wonders[currentIndex].name}
            className="wonder-image"
          />

          <div className="image-overlay">

            <p className="number">
              WONDER 0{currentIndex + 1}
            </p>

            <h2>{wonders[currentIndex].name}</h2>

            <h4>{wonders[currentIndex].country}</h4>

            <p className="description">
              {wonders[currentIndex].description}
            </p>

          </div>

          <button className="previous" onClick={prevImage}>
            &#10094;
          </button>

          <button className="next" onClick={nextImage}>
            &#10095;
          </button>

        </div>

        <div className="indicators">

          {wonders.map((wonder, index) => (
            <button
              key={index}
              className={
                currentIndex === index ? "dot active" : "dot"
              }
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${wonder.name}`}
            />
          ))}

        </div>

        <p className="counter">
          0{currentIndex + 1} / 07
        </p>

      </section>

      <footer>
        <h3>WONDERS OF THE WORLD</h3>
        <p>DESIGNED BY SARANYA AV</p>
        <p>REGISTER NUMBER: 212224040297</p>
        <p>© 2026 | EXPLORE. DISCOVER. EXPERIENCE.</p>
      </footer>

    </div>
  );
}

export default App;
