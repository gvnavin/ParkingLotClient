import {PATH} from "./Path";
import {getEndPoint} from "./HostEndPoints";

const axios = require("axios");

export async function createDemand(demand) {
  return await axios.post(getEndPoint() + PATH.createDemand, demand)
    .then(res => res.data);
}

export async function closeDispatch(id) {
  return await axios.post(getEndPoint() + PATH.closeDispatch, id)
    .then(res => res.data);
}