import React from 'react';

class UserPlaylist extends React.Component {
  componentDidMount() {
    const { fecthUserPlaylists } = this.props;
    fecthUserPlaylists();
  }

  render() {
    const { playlists } = this.props;

    return (
      <div className="container">
        <ul className="grid grid-gutter">
          <li className="grid-cell u-full u-med-full u-large-full u-xlarge-full">
            {playlists.map(playlist => <div><a>{playlist.name}</a></div>)}
          </li>
        </ul>
      </div>
    );
  }
}

export default UserPlaylist;
