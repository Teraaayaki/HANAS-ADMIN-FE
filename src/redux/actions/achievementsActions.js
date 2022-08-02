import { AchievementActions } from "./types";
import achievementAPI from "../../api/Achievement";


export const getAllWorkerList = () => async (dispatch) => {
    achievementAPI.getAllWorkers()
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