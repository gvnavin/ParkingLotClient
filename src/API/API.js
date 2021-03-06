import {PATH} from "./Path";
import {getEndPoint} from "./HostEndPoints";

const axios = require("axios");

export async function createDemand(demand) {

  const demandRequest = [{
    type: demand.demandType,
    entityAsJson: JSON.stringify(
      {
        _id: demand.vehicleId,
        color: demand.vehicleColor,
        owner: "owner"
      }
    )
  }]

  return await axios.post(getEndPoint() + PATH.createDemand + demand.demandType, demandRequest)
    .then(res => res.data);
}

export async function dispatchDemand(demand) {
  return await axios.post(getEndPoint() + PATH.dispatchDemand + demand.demandId, {})
    .then(res => res.data);
}

export async function closeDispatch(id) {
  return await axios.post(getEndPoint() + PATH.closeDispatch, id)
    .then(res => res.data);
}

export async function createSupply(supply) {
  return await axios.post(getEndPoint() + PATH.createSupply, supply)
    .then(res => res.data);
}

export async function findDispatchEntitiesByFilter(requiredEntityType, requiredFilterKey, requiredFilterValue) {
  let entities = await axios
    .get(getEndPoint() + PATH.findDispatchEntitiesByFilter + 'PARKING_LOT', {
      params: {
        requiredEntityType: requiredEntityType,
        filterKey1: requiredFilterKey,
        filterValue1: requiredFilterValue
      }
    })
    .then(res => res.data);
  return entities

}