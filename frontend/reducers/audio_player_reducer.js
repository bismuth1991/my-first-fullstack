import {
  ADD_SONGS_TO_LIST,
  ADD_SONG_TO_LIST,
  REMOVE_SONG_FROM_LIST,
  REMOVE_ALL_SONGS_FROM_LIST,
  PLAY_SONG,
} from '../actions/audio_player_actions';

const defaultState = {
  currentlyPlayed: 0,
  songList: [],
};

const audioPlayerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        currentlyPlayed: action.songId,
      };
    case ADD_SONGS_TO_LIST:
      return {
        ...state,
        songLists: state.songLists.concat(action.songIds),
      };
    case ADD_SONG_TO_LIST:
      return {
        ...state,
        songLists: state.songLists.concat([action.songId]),
      };
    case REMOVE_SONG_FROM_LIST:
      return {
        ...state,
        songLists: state.songLists.filter(songId => songId !== action.songId),
      };
    case REMOVE_ALL_SONGS_FROM_LIST:
      return {
        ...state,
        songLists: [],
      };
    default:
      return state;
  }
};

export default audioPlayerReducer;
