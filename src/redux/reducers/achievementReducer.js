import { AchievementActions } from "../actions/types";

const INITIAL_STATE = {
  achievementListData: [],
  error: null,
  errorMessage: '',
  success: null,
  successMessage: '',
};

const achievementReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AchievementActions.ACHIEVEMENT_LIST:
        return {
          ...state,
          achievementListData: action.payload,
        };
      case AchievementActions.ACHIEVEMENT_ERROR:
        return {
          ...state,
          error: action.payload,
          errorMessage: '',
        };
      case AchievementActions.ACHIEVEMENT_SUCCESS_MESSAGE:
        return {
          ...state,
          success: true,
          successMessage: 'Item has been successfully claimed',
        };
      case AchievementActions.ACHIEVEMENT_RESET_SUCCESS_MESSAGE:
        return {
          ...state,
          success: null,
          successMessage: '',
        };
      case AchievementActions.ACHIEVEMENT_RESET_ERROR:
        return {
          ...state,
          error: null,
          errorMessage: '',
        };
      default:
        return state;
    }
  };

  export default achievementReducer;