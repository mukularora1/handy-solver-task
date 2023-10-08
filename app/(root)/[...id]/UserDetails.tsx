import { getFirstCapitalLetter } from "@/helper/helper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useSelector } from "react-redux";
function UserDetails() {
  const user = useSelector((state: any) => state.user);
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {getFirstCapitalLetter(user.userDetail.name)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.userDetail.name ? user.userDetail.name : ""}
        subheader={user.userDetail.email}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {user.post && user.post.title ? user.post.title : ""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.post && user.post.body ? user.post.body : ""}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default UserDetails;
