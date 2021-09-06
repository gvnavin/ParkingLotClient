import React from "react";
import {CreateSupplyButton} from "./CreateSupplyButton";
import {ParkingAreaId} from "./ParkingAreaId";
import {ParkingAreaOwner} from "./ParkingAreaOwner";
import {ParkingAreaLocation} from "./ParkingAreaLocation";
import {NoOfParkingLots} from "./NoOfParkingLots";

export function CreateSupplyFormUI({handleSubmit, handleInput, formInput, mutation}) {
    return (
      <form onSubmit={handleSubmit}>
          <br/>
          <br/>
          <ParkingAreaId handleInput={handleInput} formInput={formInput}/>
          <br/>
          <br/>
          <ParkingAreaOwner handleInput={handleInput} formInput={formInput}/>
          <br/>
          <br/>
          <ParkingAreaLocation handleInput={handleInput} formInput={formInput}/>
          <br/>
          <br/>
          <NoOfParkingLots handleInput={handleInput} formInput={formInput}/>
          <br/>
          <br/>
          <CreateSupplyButton mutation={mutation}/>
          <br/>
      </form>
    )
}