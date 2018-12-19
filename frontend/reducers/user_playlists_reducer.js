import { RECEIVE_USER_PLAYLISTS } from '../actions/user_playlist_actions';

const userPlaylistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_PLAYLISTS:
      return {
        ...state,
        ...action.userPlaylists,
      };
    default:
      return state;
  }
};

export default userPlaylistsReducer;
