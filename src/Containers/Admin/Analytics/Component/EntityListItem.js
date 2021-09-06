import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {useStyles} from "./Styles";
import ReactJson from "react-json-view";

export function EntityListItem({entity, selectedEntityId, handleListItemClick}) {
    const classes = useStyles();
    return <React.Fragment>
        <ListItem
            alignItems="flex-start"
            key={entity._id}
            button
            selected={entity._id==selectedEntityId}
            onClick={(event) => handleListItemClick(event, entity._id)}
        >
            <ListItemText primary={entity._id}
                secondary={
                    <React.Fragment>
                        <ReactJson src={entity} />
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li"/>
    </React.Fragment>;

}