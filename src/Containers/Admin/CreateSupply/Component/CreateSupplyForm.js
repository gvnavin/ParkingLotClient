import React, {useReducer} from "react";
import {useCreateSupply} from "../../../../ReactQueryHooks/useCreateSupply";
import {CreateSupplyFormUI} from "./CreateSupplyFormUI";

export function CreateSupplyForm() {
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            parkingAreaId: "",
            parkingAreaLocation: "",
            parkingAreaOwner: "",
            noOfParkingLots: 0,
            noOfEntry: 0
        }
    );

    const mutation = useCreateSupply()

    const handleSubmit = evt => {
        evt.preventDefault();

        let data = {formInput};
        console.log("handleSubmit data : ", data)

        const demand = {
            dispatchId: formInput.dispatchId,
        }
        mutation.mutate(demand);
    };

    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        console.log("name : " + name + " newValue : " + newValue)
        setFormInput({[name]: newValue});
    };

    return <CreateSupplyFormUI
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        formInput={formInput}
        mutation={mutation}
    />

}