import { AchievementActions } from "./types";
import achievementAPI from "../../api/Achievement";

export const resetError = () => async (dispatch) => {
  dispatch({
    type: AchievementActions.ACHIEVEMENT_RESET_ERROR,
  });
};

export const resetSuccess = () => async (dispatch) => {
  dispatch({
    type: AchievementActions.ACHIEVEMENT_RESET_SUCCESS_MESSAGE,
  });
};

export const getAllWorkerList = () => async (dispatch) => {
  achievementAPI
    .getAllWorkers()
    .then(({ data }) => {
      dispatch({
        type: AchievementActions.ACHIEVEMENT_LIST,
        payload: data.achievementListData,
      });
    })
    .catch((error) => {
      dispatch({
        type: AchievementActions.ACHIEVEMENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const addToAchievement = (DATA) => async (dispatch) => {
  achievementAPI
    .addToAchievement(DATA)
    .then(() => {
      dispatch({
        type: AchievementActions.ACHIEVEMENT_SUCCESS_MESSAGE,
      });
    })
    .catch((error) => {
      dispatch({
        type: AchievementActions.ACHIEVEMENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const achievementCheck = (DATA) => async (dispatch) => {
  achievementAPI
    .achievementCheck(DATA)
    .then(({ data }) => {
      dispatch({
        type: AchievementActions.ACHIEVEMENT_CHECK,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: AchievementActions.ACHIEVEMENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
