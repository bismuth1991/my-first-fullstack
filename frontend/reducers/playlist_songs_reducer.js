import { SHOW_USER_PLAYLIST } from '../actions/user_playlist_actions';
import { REMOVE_PLAYLIST_SONG } from '../actions/playlist_songs_actions';

const playlistSongsReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_USER_PLAYLIST:
      return action.playlist.playlistSongs;
    case REMOVE_PLAYLIST_SONG: {
      const newState = { ...state };
      delete newState[action.songId];

      return newState;
    }

    default:
      return state;
  }
};

export default playlistSongsReducer;
