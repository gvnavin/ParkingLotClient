import React from "react";
import {FindEntitiesButton} from "./FindEntitiesButton";
import {RequiredEntityTypeList} from "./RequiredEntityTypeList";
import {RequiredFilterKeyList} from "./RequiredFilterKeyList";
import {RequiredFilterValue} from "./RequiredFilterValue";

export function FilterFormUI({handleSubmit, handleInput, formInput, queryInfo}) {
  return (
    <form onSubmit={handleSubmit}>
      <br/>
      <br/>
      <RequiredEntityTypeList handleInput={handleInput} formInput={formInput}/> {' '}
      <RequiredFilterKeyList handleInput={handleInput} formInput={formInput}/> {' '}
      <RequiredFilterValue handleInput={handleInput} formInput={formInput}/>
      <br/>
      <br/>
      <FindEntitiesButton queryInfo={queryInfo}/>
      <br/>
    </form>
  )
}