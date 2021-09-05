import React, {useReducer} from "react";
import {useCreateDemand} from "../../ReactQueryHooks/useCreateDemand";
import {CloseDispatchFormUI} from "./CloseDispatchFormUI";

export function CloseDispatchForm() {
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            dispatchId: "",
        }
    );

    const mutation = useCreateDemand()

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

    return <CloseDispatchFormUI
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        formInput={formInput}
        mutation={mutation}
    />

}