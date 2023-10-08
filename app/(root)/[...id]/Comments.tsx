import { getFirstCapitalLetter } from "@/helper/helper";
import { Card } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { memo } from "react";
import { useSelector } from "react-redux";

function Comments() {
  const user = useSelector((state: any) => state.user);
  return (
    <Card sx={{ width: "100%", mt: 6 }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {user.comments &&
          user.comments.length &&
          user.comments.map((el: any, index: number) => {
            return (
              <div key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>{getFirstCapitalLetter(el.email)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={el.name}
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                          {el.email}
                        </Typography>
                        —{el.body}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            );
          })}
      </List>
    </Card>
  );
}

export default memo(Comments);
