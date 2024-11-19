"use server";

import { revalidatePath } from "next/cache";

export const getUsers = async () => {
  let users = await fetch(`${process.env.BASE_URL}api/users`, {
    cache: "no-cache",
  });
  users = await users.json();
  console.log("Users Fetched Successfully");
  return users;
  revalidatePath("/admin/categories");
};
