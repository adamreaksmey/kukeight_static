import React from "react";
import Auth from "@/components/hoc/Auth";
import Paper from "@/layout/paper/index";

const Home = () => {
  return (
    <>
      <Paper>
        <div className="">
          Recent Top Recommendation:
        </div>
      </Paper>
    </>
  );
};

export default Auth(Home);
