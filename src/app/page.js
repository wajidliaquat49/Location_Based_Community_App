import { auth, signOut } from "../../auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="font-bold text-4xl text-center text-blue-600 mb-10">
        Find Your Friends
      </h1>
      {session ? (
        <div className="flex flex-col items-center p-8 shadow-lg rounded-lg bg-white max-w-md w-full text-center">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            User is logged in with:
          </h2>
          <h1 className="font-semibold text-gray-800 text-xl mb-6">
            {session?.user?.email}
          </h1>
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
        <div className="flex flex-col items-center p-8 shadow-lg rounded-lg bg-white max-w-md w-full text-center">
          <h2 className="text-lg font-medium text-gray-700 mb-6">
            Please log in to continue
          </h2>
          <Link href="/signin">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
              Login to Continue
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
