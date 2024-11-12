"use client";
import React, { useRef, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadImage } from "@/actions/upload";
import { AddToSubCategory } from "@/actions/subcategories";
import { useToast } from "@/hooks/use-toast";

export function AddSubCategory({ categories }) {
  const [open, setOpen] = useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Sub Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Sub Category</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm onClose={() => setOpen(false)} categories={categories} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" categories={categories} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className, categories, onClose }) {
  const formRef = useRef();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddCategory = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const uploadLink = await uploadImage(formData);

      const obj = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: selectedCategory,
        thumbnail: uploadLink,
      };

      await AddToSubCategory(obj);
      toast({
        title: "Subcategory Added Successfully...",
      });

      formRef.current.reset();
      onClose();
    } catch (error) {
      console.error("Error adding subcategory:", error);
      toast({
        title: "Failed to add subcategory",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleAddCategory}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          required
          type="text"
          id="title"
          placeholder="Enter Category Title"
          name="title"
          disabled={loading}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input
          required
          id="description"
          placeholder="Enter Category Description"
          name="description"
          disabled={loading}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <Input
          id="thumbnail"
          type="file"
          required
          name="thumbnail"
          disabled={loading}
        />
      </div>

      <div className="grid gap-2">
        <Select onValueChange={setSelectedCategory} disabled={loading}>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((data) => (
              <SelectItem key={data._id} value={data._id}>
                {data.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Add Category"}
      </Button>
    </form>
  );
}
