"use client";
import { getPost, getPostComments, getUserDetail, loaderOn } from "@/store/slices/userSlice";
import { CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "./Comments";
import UserDetails from "./UserDetails";
function page({ params }: { params: any }) {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderOn());
    const fetchData = async () => {
      if (params && params.id && params.id.length) {
        try {
          const postId = params.id[0];
          const userId = params.id[1];
          await dispatch(getUserDetail(userId));
          await dispatch(getPostComments(postId));
          await dispatch(getPost(postId));
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={user.isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="w-full">
        {user.userDetail ? <UserDetails /> : ""}
        {user.comments && user.comments.length ? <Comments /> : ""}
      </div>
    </div>
  );
}

export default page;
