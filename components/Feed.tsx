"use client";
import { getPosts } from "@/store/slices/userSlice";
import { Box, CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
function Feed() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPosts());
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <main>
      <div>
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={user.isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Box className="flex flex-wrap justify-center gap-4">
          {user.posts.length &&
            user.posts.map((el: any) => {
              return <PostCard title={el.title} body={el.body} id={el.id} key={el.id} userId={el.userId} />;
            })}
        </Box>
      </div>
    </main>
  );
}

export default memo(Feed);
