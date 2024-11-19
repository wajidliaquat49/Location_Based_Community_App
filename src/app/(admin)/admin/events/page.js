import { getEvents } from "@/actions/events";
import AddEventForm from "@/components/AddEventSheet/AddEventSheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { auth } from "../../../../../auth";

export default async function Events() {
  const events = await getEvents();
  const session = await auth();

  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Events</h1>
        <AddEventForm session={session} />
      </div>
      <Table>
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
          {events?.events?.map((event) => (
            <TableRow key={event._id}>
              <TableCell className="text-right">
                <Image
                  src={event.thumbnail}
                  alt="Event Thumbnail"
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.address}</TableCell>
              <TableCell>{event.startDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
