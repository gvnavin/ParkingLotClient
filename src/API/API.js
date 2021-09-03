import {PATH} from "./Path";

const axios = require("axios");

export async function get() {
  let initialIntent = await axios
    .get(PATH.triggerConversation)
    .then(res => res.data);
  return initialIntent
}

export async function post(intentType, userSelectedRecommendationType) {
  let response = await axios
    .post(PATH.postUserSelectedRecommendationAndGetResponse, {
      intentType: intentType,
      userSelectedRecommendationType: userSelectedRecommendationType
    })
    .then(res => res.data);
  return response
}
