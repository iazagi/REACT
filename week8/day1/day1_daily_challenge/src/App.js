
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//var Carousel = require('react-responsive-carousel').Carousel;

function App() {
  return (

      <div className="continer">
      <Carousel >
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
              <p className="legend">Legend 3</p>
          </div>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
              <p className="legend">Legend 4</p>
          </div>

      </Carousel>

    </div>
  );
}

export default App;
