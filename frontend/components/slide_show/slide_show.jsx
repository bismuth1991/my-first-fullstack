import React from 'react';

class SlideShow extends React.Component {
  static showSlide(n, context) {
    let currentSlide = n;

    const slides = document.getElementsByClassName('slides');
    // const dot = document.getElementsByClassName('dot');

    if (currentSlide > slides.length) currentSlide = 1;
    if (currentSlide < 1) currentSlide = slides.length;

    for (let i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
      // dot[i].classList.remove('active');
    }

    slides[currentSlide - 1].style.display = 'block';
    // dot[currentSlide - 1].classList.add('active');

    window.setTimeout(() => context.setState({ currentSlide: currentSlide + 1 }), 5000);
  }

  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 1,
    };

    this.changeSlide = this.changeSlide.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
  }

  componentDidMount() {
    const { currentSlide } = this.state;
    SlideShow.showSlide(currentSlide, this);
  }

  componentDidUpdate() {
    const { currentSlide } = this.state;
    SlideShow.showSlide(currentSlide, this);
  }

  changeSlide(n) {
    return () => (
      this.setState(state => ({
        currentSlide: state.currentSlide + n,
      })));
  }

  currentSlide(n) {
    return () => (
      this.setState({
        currentSlide: n,
      }));
  }

  render() {
    return (
      <div className="slidehow-container">
        <div className="slides fade">
          <img
            src="https://blogs.glowscotland.org.uk/fi/inverkeithinghsmusic/files/2018/02/Music-banner-1.jpg"
            alt="slide-1"
          />
        </div>

        <div className="slides fade">
          <img
            src="https://photo-zmp3.zadn.vn/banner/8/c/5/f/8c5fbab75aca24c87d8131fdddf41f87.jpg"
            alt="slide-2"
          />
        </div>

        <div className="slides fade">
          <img
            src="https://photo-zmp3.zadn.vn/banner/e/9/0/2/e902c0d75f215e7d2fb5c6e326aa1274.jpg"
            alt="slide-3"
          />
        </div>

        {/* <a className="prev" onClick={this.changeSlide(-1)}>&#10094;</a>
        <a className="next" onClick={this.changeSlide(1)}>&#10095;</a> */}

        {/* dots */}
        {/* <div className="dot-container" style={{ textAlign: 'center' }}>
          <span className="dot" role="presentation" onClick={this.currentSlide(1)} />
          <span className="dot" role="presentation" onClick={this.currentSlide(2)} />
          <span className="dot" role="presentation" onClick={this.currentSlide(3)} />
        </div> */}
      </div>
    );
  }
}

export default SlideShow;
