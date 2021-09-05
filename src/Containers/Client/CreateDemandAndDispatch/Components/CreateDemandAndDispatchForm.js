import React, {useReducer} from "react";
import {useCreateDemand} from "../../../../ReactQueryHooks/useCreateDemand";
import {CreateDemandAndDispatchFormUI} from "./CreateDemandAndDispatchFormUI";

export function CreateDemandAndDispatchForm() {
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            vehicleId: "",
            vehicleColor: "",
        }
    );

    const mutation = useCreateDemand()

    const handleSubmit = evt => {
        evt.preventDefault();

        let data = {formInput};
        console.log("handleSubmit data : ", data)

        const demand = {
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

    return <CreateDemandAndDispatchFormUI
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        formInput={formInput}
        mutation={mutation}
    />

}