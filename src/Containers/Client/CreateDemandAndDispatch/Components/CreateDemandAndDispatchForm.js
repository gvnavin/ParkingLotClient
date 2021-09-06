import React, {useReducer} from "react";
import {useCreateDemand} from "../../../../ReactQueryHooks/useCreateDemand";
import {CreateDemandAndDispatchFormUI} from "./CreateDemandAndDispatchFormUI";
import {DispatchDemandButton} from "./DispatchDemandButton";
import {useDispatchDemand} from "../../../../ReactQueryHooks/useDispatchDemand";
import {Typography} from "@material-ui/core";

export function CreateDemandAndDispatchForm() {
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            demandType: "",
            vehicleId: "",
            vehicleColor: "",
            demandId: "",
        }
    );

    const mutation = useCreateDemand(setFormInput)
    const dispatchDemandMutation = useDispatchDemand()

    const handleSubmit = evt => {
        evt.preventDefault();

        let data = {formInput};
        console.log("handleSubmit data : ", data)

        const demand = {
            demandType: formInput.demandType,
            vehicleId: formInput.vehicleId,
            vehicleColor: formInput.vehicleColor,
        }
        mutation.mutate(demand);
    };

    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        console.log("name : " + name + " newValue : " + newValue)
        setFormInput({[name]: newValue});
    };

    return (<div>
        <CreateDemandAndDispatchFormUI
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          formInput={formInput}
          mutation={mutation}
        />
        <br/>
        <Typography>
            Demand Id: {formInput.demandId}
        </Typography>
        <hr/>
        <br/>
        <DispatchDemandButton mutation={dispatchDemandMutation} formInput={formInput}/>
    </div>)
}