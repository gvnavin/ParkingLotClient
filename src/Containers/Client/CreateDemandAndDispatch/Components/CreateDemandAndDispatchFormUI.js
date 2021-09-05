import React from "react";
import {VehicleId} from "./VehicleId";
import {VehicleColor} from "./VehicleColor";
import {CreateDemandButton} from "./CreateDemandButton";
import {DemandTypeList} from "./DemandTypeList";
import {DispatchDemandButton} from "./DispatchDemandButton";

export function CreateDemandAndDispatchFormUI({handleSubmit, handleInput, formInput, mutation}) {
    return (
        <form onSubmit={handleSubmit}>
            <DemandTypeList formInput={formInput}/>
            <br/>
            <br/>
            <VehicleId handleInput={handleInput} formInput={formInput}/>
            <br/>
            <br/>
            <VehicleColor handleInput={handleInput} formInput={formInput}/>
            <br/>
            <br/>
            <CreateDemandButton mutation={mutation}/>
            <br/>
            <DispatchDemandButton mutation={mutation}/>
        </form>
    )
}