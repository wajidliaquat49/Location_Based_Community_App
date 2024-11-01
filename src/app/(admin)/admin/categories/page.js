import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import { AddCategory } from "@/components/AddCategory/AddCategory";

const categories = [
  {
    title: "Technology",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    description:
      "Latest trends, innovations, and updates in the digital world...",
  },
  {
    title: "Education",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
    description: "Learning resources, study tips, and academic insights...",
  },
  {
    title: "Health & Wellness",
    thumbnail:
      "https://images.unsplash.com/photo-1640504410124-461df050ec7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEhlYWx0aCUyMCUyNiUyMFdlbGxuZXNzfGVufDB8fDB8fHww",
    description:
      "Tips on maintaining mental, physical, and emotional well-being...",
  },
  {
    title: "Finance",
    thumbnail:
      "https://images.unsplash.com/photo-1534951009808-766178b47a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Guidance on money management, investing, and saving strategies...",
  },
  {
    title: "Entertainment",
    thumbnail:
      "https://images.unsplash.com/photo-1535470142785-2b2f3ce24e5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D",
    description: "News and insights on movies, music, and popular culture...",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen mx-10 px-1">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Categories</h1>
        <AddCategory />
      </div>

      <Table>
        <TableCaption>A list of your categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.title}>
              <TableCell className="text-right">
                <Image
                  src={category.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{category.title}</TableCell>
              <TableCell className="font-medium">
                {category.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
