"use server";

import { revalidatePath } from "next/cache";

export const AddToSubCategory = async (obj) => {
  console.log(obj);
  const added = await fetch(`${process.env.BASE_URL}api/subcategories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  console.log("added=>", added);
  if (added.ok) console.log("Subcategories Added Successfully");
  revalidatePath("/admin/subcategories");
};

export const getSubCategories = async (category) => {
  let url;
  if (category) {
    url = `${process.env.BASE_URL}api/subcategories?category=${category}`;
  } else {
    url = `${process.env.BASE_URL}api/subcategories`;
  }
  let subcategories = await fetch(url,{ cache: "no-cache" });
  subcategories = await subcategories.json();
  console.log("Subcategories Fetched Successfully");
  return subcategories;
  // revalidatePath("/admin/categories");
};
