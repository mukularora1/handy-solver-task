import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function PostCard({ title, body, id, userId }: { title: string; body: string; id: number; userId: number }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Link href={`/${id}/${userId}`}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={`/${id}/${userId}`} target="_blank">
          <Button size="small" color="primary">
            Open in new tab
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default PostCard;
