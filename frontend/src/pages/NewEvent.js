import React from "react";
import EventForm from "../components/EventForm";
//import { json, redirect } from "react-router-dom";

const NewEvent = () => {
  return <EventForm method="post" />;
};

export default NewEvent;
