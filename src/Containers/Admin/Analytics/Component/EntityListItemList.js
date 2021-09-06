import List from "@material-ui/core/List";
import React from "react";
import {EntityListItem} from "./EntityListItem";
import {useStyles} from "./Styles";

export function EntityListItemList({queryInfo, selectedEntityId, handleListItemClick}) {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {
                queryInfo.data.map(
                    (entity) => {

                        const entityAsJson = JSON.parse(entity.entityAsJson)

                        if (entityAsJson.id) {
                            entityAsJson._id = entityAsJson.id
                        }

                        return <EntityListItem
                          key={entityAsJson._id}
                          entity={entityAsJson}
                          selectedEntityId={selectedEntityId}
                          handleListItemClick={handleListItemClick}/>
                    }
                )
            }
        </List>
    );
}