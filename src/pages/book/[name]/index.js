import React from "react";
import Auth from "@/components/hoc/Auth";
import { useRouter } from "next/router";
import Paper from "@/layout/paper/index";

const ReadBook = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Paper>
      <div>{name}</div>
    </Paper>
  );
};

export default Auth(ReadBook);
