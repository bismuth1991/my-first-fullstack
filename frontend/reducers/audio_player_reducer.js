import {
  ADD_SONGS_TO_LIST,
  ADD_SONG_TO_LIST,
  REMOVE_SONG_FROM_LIST,
  REMOVE_ALL_SONGS_FROM_LIST,
  PLAY_SONG,
} from '../actions/audio_player_actions';

const defaultState = {
  currentlyPlayed: -1,
  songList: [],
};

const audioPlayerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      // debugger;
      return {
        ...state,
        songList: [
          ...state.songList.slice(0, action.playingSongIdx),
          action.songId,
          ...state.songList.slice(action.playingSongIdx),
          ...state.songList.slice(action.playingSongIdx, action.playingSongIdx + 1),
        ],
      };
    case ADD_SONGS_TO_LIST:
      return {
        ...state,
        songList: state.songList.concat(action.songIds),
      };
    case ADD_SONG_TO_LIST:
      return {
        ...state,
        songList: state.songList.concat([action.songId]),
      };
    case REMOVE_SONG_FROM_LIST:
      return {
        ...state,
        songList: state.songList.filter(songId => songId !== action.songId),
      };
    case REMOVE_ALL_SONGS_FROM_LIST:
      return {
        ...state,
        songList: [],
      };
    default:
      return state;
  }
};

export default audioPlayerReducer;
