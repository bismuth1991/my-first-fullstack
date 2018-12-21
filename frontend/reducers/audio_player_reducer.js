import {
  ADD_SONGS_TO_LIST,
  ADD_SONG_TO_LIST,
  REMOVE_SONG_FROM_LIST,
  REMOVE_ALL_SONGS_FROM_LIST,
  PLAY_SONG,
} from '../actions/audio_player_actions';

const audioPlayerReducer = (state = [], action) => {
  switch (action.type) {
    case PLAY_SONG:
      return [
        ...state.slice(0, action.playingSongIdx),
        action.songId,
        ...state.slice(action.playingSongIdx + 1),
        ...state.slice(action.playingSongIdx, action.playingSongIdx + 1),
      ];
    case ADD_SONGS_TO_LIST:
      return action.songIds;
    case ADD_SONG_TO_LIST:
      return state.concat([action.songId]);
    case REMOVE_SONG_FROM_LIST:
      return state.filter(songId => songId !== action.songId);
    case REMOVE_ALL_SONGS_FROM_LIST:
      return [];
    default:
      return state;
  }
};

export default audioPlayerReducer;
