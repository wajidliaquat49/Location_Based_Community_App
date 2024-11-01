import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";
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

const subcategories = [
  {
    title: "Artificial Intelligence (AI)",
    category: "Technology",
    thumbnail:
      "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZSUyMChBSSl8ZW58MHx8MHx8fDA%3D",
    description:
      "Enabling machines to simulate human intelligence through learning, reasoning, and problem-solving...",
  },
  {
    title: "Online Learning",
    category: "Education",
    thumbnail:
      "https://images.unsplash.com/photo-1597933471507-1ca5765185d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25saW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
    description:
      "Providing flexible, accessible education through digital platforms and virtual classrooms...",
  },
  {
    title: "Mental Health",
    category: "Health & Wellness",
    thumbnail:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVudGFsJTIwSGVhbHRofGVufDB8fDB8fHww",
    description:
      "Focusing on emotional, psychological, and social well-being to improve quality of life...",
  },
  {
    title: "Personal Finance",
    category: "Finance",
    thumbnail:
      "https://images.unsplash.com/photo-1705948733110-74e45eb7a4ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVyc29uYWwlMjBGaW5hbmNlfGVufDB8fDB8fHww",
    description:
      "Managing individual financial activities, including budgeting, saving, and investing for future goals...",
  },
  {
    title: "Streaming Services",
    category: "	Entertainment",
    thumbnail:
      "https://images.unsplash.com/photo-1717295248358-4b8f2c8989d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3RyZWFtaW5nJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "Providing on-demand access to movies, TV shows, and music through online platforms...",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen mx-10 px-1">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">SubCategories</h1>
        <AddSubCategory />
      </div>

      <Table>
        <TableCaption>A list of your subcategories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subcategories.map((category) => (
            <TableRow key={category.title}>
              <TableCell className="text-right">
                <Image
                  src={category.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{category.category}</TableCell>
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
