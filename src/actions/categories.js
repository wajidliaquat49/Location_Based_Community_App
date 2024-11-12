"use server";

import { revalidatePath } from "next/cache";

export const AddToCategory = async (obj) => {
  const added = await fetch(
    `${process.env.BASE_URL}api/categories`,
    {
      method: "POST",
      body: JSON.stringify(obj),
    }
  );
  if (added.ok) console.log("Category Added Successfully");
  revalidatePath("/admin/categories");
};

export const getCategories = async () => {
  let categories = await fetch(`${process.env.BASE_URL}api/categories`,{ cache: "no-cache" });
  categories = await categories.json();
  console.log("Category Fetched Successfully");
  return categories;
  revalidatePath("/admin/categories");
};
