"use server";

import { revalidatePath } from "next/cache";

export const AddEvent = async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/events`, {
    method: "POST",
    body: JSON.stringify(obj),
    cache: "no-cache",
  });
  if (added.ok) console.log("Event Added Successfully");
  revalidatePath("/admin/events");
};

export const getEvents = async () => {
  let events = await fetch(`${process.env.BASE_URL}api/events`, {
    cache: "no-cache",
  });
  events = await events.json();
  console.log("Event Fetched Successfully");
  return events;
  revalidatePath("/admin/categories");
};
