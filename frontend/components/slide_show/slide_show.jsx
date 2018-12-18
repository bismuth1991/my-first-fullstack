import React from 'react';

class SlideShow extends React.Component {
  static showSlide(n) {
    const currentSlide = n;

    const slides = document.getElementsByClassName('slides');
    const dots = document.getElementsByClassName('dot');

    if (slides.length === 0 || dots.length === 0) return;

    for (let i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i += 1) {
      dots[i].classList.remove('active');
    }

    slides[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active');
  }

  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };

    this.changeSlide = this.changeSlide.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
  }

  componentDidMount() {
    const { currentSlide } = this.state;

    SlideShow.showSlide(currentSlide);

    this.slideShowTimeout = window.setTimeout(
      () => this.setState({ currentSlide: (currentSlide + 1) % 3 }),
      5000,
    );
  }

  componentDidUpdate() {
    const { currentSlide } = this.state;

    SlideShow.showSlide(currentSlide);

    window.clearTimeout(this.slideShowTimeout);

    this.slideShowTimeout = window.setTimeout(
      () => this.setState({ currentSlide: (currentSlide + 1) % 3 }),
      5000,
    );
  }

  changeSlide(n) {
    const { currentSlide } = this.state;

    if (currentSlide + n < 0) {
      return () => this.setState({ currentSlide: 2 });
    }
    return () => (
      this.setState(state => ({
        currentSlide: (state.currentSlide + n) % 3,
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
      <div className="container slide-show">
        <ul className="grid">
          <li className="grid-cell u-full u-med-full u-large-full u-xlarge-full">
            <figure className="slides fade">
              <img
                src="https://www.dropbox.com/s/7zqohncho1295uc/3.jpg?dl=1"
                alt="slide-1"
              />
            </figure>
          </li>

          <li className="grid-cell u-full u-med-full u-large-full u-xlarge-full">
            <figure className="slides fade">
              <img
                src="https://www.dropbox.com/s/nq404z957s7d423/4.jpg?dl=1"
                alt="slide-2"
              />
            </figure>
          </li>

          <li className="grid-cell u-full u-med-full u-large-full u-xlarge-full">
            <figure className="slides fade">
              <img
                src="https://www.dropbox.com/s/g4wpcsjaadnpz0k/2.jpg?dl=1"
                alt="slide-3"
              />
            </figure>
          </li>
        </ul>

        <a className="prev" onClick={this.changeSlide(-1)}>&#10094;</a>
        <a className="next" onClick={this.changeSlide(1)}>&#10095;</a>

        {/* dots */}
        <div className="dot-container" style={{ textAlign: 'center' }}>
          <span className="dot" role="presentation" onClick={this.currentSlide(0)} />
          <span className="dot" role="presentation" onClick={this.currentSlide(1)} />
          <span className="dot" role="presentation" onClick={this.currentSlide(2)} />
        </div>
      </div>
    );
  }
}

export default SlideShow;
