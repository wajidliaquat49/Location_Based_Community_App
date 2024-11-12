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

const users = [
  {
    fullname: "Sohail Shoukat",
    email: "sohailshoukat149@gmail.com",
    location: "Karachi , Pakistan",
    profileImage:
      "https://images.unsplash.com/photo-1599110364868-364162848518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "Wajid Ali",
    email: "wajidliaquat49@gmail.com",
    location: "Karachi , Pakistan",
    profileImage:
      "https://images.unsplash.com/photo-1599110364868-364162848518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "Ali Raza",
    email: "aliraza@gmail.com",
    location: "Karachi , Pakistan",
    profileImage:
      "https://images.unsplash.com/photo-1599110364868-364162848518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "Tufail Ahmed",
    email: "tufailahmed@gmail.com",
    location: "Karachi , Pakistan",
    profileImage:
      "https://images.unsplash.com/photo-1599110364868-364162848518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "Sadaqat Ali",
    email: "sadaqatali@gmail.com",
    location: "Karachi , Pakistan",
    profileImage:
      "https://images.unsplash.com/photo-1599110364868-364162848518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww",
    events: 5,
  },
];

export default function Users() {
  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Users</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile Image</TableHead>
            <TableHead className="w-[100px]">Fullname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.fullname}>
              <TableCell className="text-right">
                <Image
                  src={user.profileImage}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
