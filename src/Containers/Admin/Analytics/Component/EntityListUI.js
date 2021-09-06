import React from "react";
import {EntityListItemList} from "./EntityListItemList";

export function EntityListUI({queryInfo, handleListItemClick, selectedEntityId}) {
  if (queryInfo.isLoading) {
    return <div>Loading...</div>
  } else if (queryInfo.isError) {
    return <div>{queryInfo.error.message}</div>
  } else if (queryInfo.isFetching) {
    return <div>{'Updating...'}</div>
  } else if (queryInfo.isIdle) {
    return <div>{'Idle...'}</div>
  } else {
    return <EntityListItemList queryInfo={queryInfo} selectedEntityId={selectedEntityId} handleListItemClick={handleListItemClick}/>
  }
}