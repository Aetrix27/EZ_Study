import React, { useState, useRef } from 'react';
import "./Landing.css"
import { useSpring, animated } from 'react-spring';
import ReactDOM from 'react-dom';
import particlesConfig from './particles-config.js';
import Typewriter from '../../static/images/typewriter.png'
import Features from '../../static/images/features.png'

export default function Landing() {
  return (
    <div className="landing">
      {/* Landing Page 1 <img className="logo1" alt="logo1" src={Logo1} />*/}
      <div className="hero">
        <div>
          <p>
            Create Study Cards!
          </p>
          <a href="/card">
            <button>Get Started</button>
          </a>
        </div>
      </div>

      {/* Effects */}
      <div className="main">
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
    </div>
    <div className  = "hero">
      Share with your friends!
    </div>

      {/* Landing Page 2 */}
      <div className="hero2">
        <p>
          Create cards for anything you are studying for!{" "}
        </p>

        <button>Learn More</button>
      </div>
      <footer></footer>
    </div>

  )
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
 
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

const cards = [
  {
    title: 'Study Cards that are easy to access and manage.',
    description:
      'Users upload study cards for various subjects.',
    image: Features,
    imageRatio: 1016 / 1016
  },
  {
    title: 'Many Subjects and Tools',
    description:
      'Browse other user study cards, ranging from Math to Medicine!',
    image: Typewriter,
    imageRatio: 839 / 1133
  },

];

//export default Landing