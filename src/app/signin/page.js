import Image from "next/image";
import { auth, signIn, signOut } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await auth();
  console.log("session==>", session);

  if (session) redirect("/");

  return (
    <div className="flex items-center justify-center container mx-auto min-h-screen bg-gray-100">
      {session ? (
        <div className="flex flex-col items-center p-8 shadow-lg rounded-lg bg-white max-w-xs">
          <Image
            src={session?.user?.image}
            height={120}
            width={120}
            className="rounded-full border-4 border-blue-500"
          />
          <h1 className="font-bold text-xl my-4 text-gray-800">
            {session?.user.name}
          </h1>
          <h1 className="text-gray-600 mb-4">{session?.user.email}</h1>

          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
            >
              Sign Out
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center p-8 shadow-lg rounded-lg bg-white max-w-xs">
          <h1 className="text-2xl font-bold text-blue-600 mb-6">
            Welcome Back!
          </h1>

          <div>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300 mb-4" // Add margin-bottom here
              >
                Sign in with Google
              </button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
              >
                Sign in with GitHub
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
