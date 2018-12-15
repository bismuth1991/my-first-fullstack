import React from 'react';

class SlideShow extends React.Component {
  static showSlide(n) {
    let currentSlide = n;

    const slides = document.getElementsByClassName('slides');
    const dots = document.getElementsByClassName('dots');

    if (currentSlide > slides.length) currentSlide = 1;
    if (currentSlide < 1) currentSlide = slides.length;

    for (let i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[currentSlide - 1].style.display = 'block';
    dots[currentSlide - 1].className += ' active';
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
    SlideShow.showSlide(currentSlide);
  }

  componentDidUpdate() {
    const { currentSlide } = this.state;
    SlideShow.showSlide(currentSlide);
  }

  changeSlide(n) {
    this.setState(state => ({
      currentSlide: state.currentSlide + n,
    }));
  }

  currentSlide(n) {
    this.setState({
      currentSlide: n,
    });
  }

  render() {
    return (
      <div className="slidehow-container">
        <img className="slides fade" src="" alt="slide-1" />
        <img className="slides fade" src="" alt="slide-1" />
        <img className="slides fade" src="" alt="slide-1" />

        {/* next & prev button */}
        <a className="prev" onClick={this.changeSlide(-1)}>&#10094;</a>
        <a className="next" onClick={this.changeSlide(1)}>&#10095;</a>

        {/* dots */}
        <div style={{ textAlign: 'center' }}>
          <span className="dots" role="presentation" onClick={this.currentSlide(1)} />
          <span className="dots" role="presentation" onClick={this.currentSlide(2)} />
          <span className="dots" role="presentation" onClick={this.currentSlide(3)} />
        </div>
      </div>
    );
  }
}

export default SlideShow;
