import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { title, artist, albumCover } = this.props;
    // const style = {
    //   backgroundImage: `url(${albumCover})`,
    // };

    // return (
    //   <div className="song-cover">
    //     <div className="song-cover-img" style={style}>
    //       <i className="far fa-play-circle play-icon" />
    //     </div>
    //   </div>
    // );
    return (
      <div className="song-item-container">
        <figure className="song-img-container">
          <img className="song-img" src={albumCover} alt={title} />
          <i className="far fa-play-circle play-icon" />
        </figure>

        <h3>{title}</h3>
        <h4>{artist}</h4>
      </div>
    );
  }
}

export default SongIndexItem;
