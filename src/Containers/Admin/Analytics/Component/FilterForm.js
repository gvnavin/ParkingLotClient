import React, {useReducer} from "react";
import {FilterFormUI} from "./FilterFormUI";
import {useFindDispatchEntitiesByFilter} from "../../../../ReactQueryHooks/useFindDispatchEntitiesByFilter";
import {EntityListUI} from "./EntityListUI";

export function FilterForm() {

  const [selectedEntityId, setSelectedEntity] = React.useState("")

  function handleListItemClick(event, selectedIntentName) {
    setSelectedEntity(selectedIntentName)
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      requiredEntityType: "",
      requiredFilterKey: "",
      requiredFilterValue: "",
      submit: false
    }
  );

  const queryInfo = useFindDispatchEntitiesByFilter(
    formInput.requiredEntityType,
    formInput.requiredFilterKey,
    formInput.requiredFilterValue,
    formInput.submit
  )

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = {formInput};
    console.log("FilterForm handleSubmit data : ", data)

    setFormInput({submit: true})
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    console.log("FilterForm name : " + name + " newValue : " + newValue)
    setFormInput({[name]: newValue, submit: false});
  };

  return (<div>
    <FilterFormUI
      handleSubmit={handleSubmit}
      handleInput={handleInput}
      formInput={formInput}
      queryInfo={queryInfo}
    />
    <br/>
    <EntityListUI
      queryInfo={queryInfo}
      handleListItemClick={handleListItemClick}
      selectedEntityId={selectedEntityId}
    />
  </div>)
}