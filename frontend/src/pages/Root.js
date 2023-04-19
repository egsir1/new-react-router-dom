import React, { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  //   const navigation = useNavigation();
  return (
    <Fragment>
      <MainNavigation />
      {/* 
      <main>{navigation.state === "loading" && <p>Loading...</p>}</main> */}
      <Outlet />
    </Fragment>
  );
};

export default Root;
