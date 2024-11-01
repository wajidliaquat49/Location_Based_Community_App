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

const events = [
  {
    title: "Ramadan",
    description:
      "The holy month of fasting, prayer, and reflection, likely beginning around mid-March and ending mid-April...",
    location: "Karachi , Pakistan",
    thumbnail:
      "https://images.unsplash.com/photo-1648288718348-4b6d53755716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbWRhbiUyMG11YmFyYWt8ZW58MHx8MHx8fDA%3D",
    date: new Date().toLocaleDateString(),
  },

  {
    title: "Eid-ul-Fitr",
    description:
      "Celebrated at the end of Ramadan, marking the completion of fasting and a time of communal joy (Expected date: mid-April)...",
    location: "Karachi , Pakistan",
    thumbnail:
      "https://images.unsplash.com/photo-1590100344239-45ac4a6e0ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVpZCUyMHVsJTIwZml0cnJ8ZW58MHx8MHx8fDA%3D",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Eid-ul-Adha",
    description:
      "The Festival of Sacrifice, celebrated after Hajj, honoring Prophet Ibrahim’s (A.S.) willingness to sacrifice for Allah (Expected date: early June)...",
    location: "Karachi , Pakistan",
    thumbnail:
      "https://images.unsplash.com/photo-1713024694832-e3e46bf1ff67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWlkJTIwdWwlMjBhZGhhfGVufDB8fDB8fHww",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Hajj (Mecca, Saudi Arabia)",
    description:
      "The sacred pilgrimage, where Muslims from around the world gather in Mecca and Medina (Expected dates: late May or early June)...",
    location: "Karachi , Pakistan",
    thumbnail:
      "https://images.unsplash.com/photo-1720195899208-d5555176d1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhhamolMjAoTWVjY2ElMkMlMjBTYXVkaSUyMEFyYWJpYSl8ZW58MHx8MHx8fDA%3D",
    date: new Date().toLocaleDateString(),
  },

  {
    title: "Islamic New Year (1447 AH)",
    description:
      "Marks the beginning of a new year in the Islamic Hijri calendar, significant for Islamic history and reflection (Expected date: late June)...",
    location: "Karachi , Pakistan",
    thumbnail:
      "https://images.unsplash.com/photo-1482329833197-916d32bdae74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fElzbGFtaWMlMjBOZXclMjBZZWFyJTIwKDE0NDclMjBBSCl8ZW58MHx8MHx8fDA%3D",
    date: new Date().toLocaleDateString(),
  },
];

export default function Events() {
  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Events</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.title}>
              <TableCell className="text-right">
                <Image
                  src={event.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{event.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
