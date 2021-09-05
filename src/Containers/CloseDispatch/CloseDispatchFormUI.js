import React from "react";
import {DispatchId} from "./DispatchId";
import {CloseDispatchButton} from "./CloseDispatchButton";

export function CloseDispatchFormUI({handleSubmit, handleInput, formInput, mutation}) {
    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <br/>
            <DispatchId handleInput={handleInput} formInput={formInput}/>
            <br/>
            <br/>
            <CloseDispatchButton mutation={mutation}/>
            <br/>
        </form>
    )
}