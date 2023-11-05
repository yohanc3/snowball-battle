/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rSxt8Qo8oN7
 */
import Link from "next/link"

export function Lobby() {
  return (
    <section className="w-full h-screen bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Multiplayer Lobby</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Room 1</h2>
            <p className="text-gray-600 dark:text-gray-300">10/20 Players</p>
            <Link
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="#"
            >
              Join Room
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Room 2</h2>
            <p className="text-gray-600 dark:text-gray-300">15/20 Players</p>
            <Link
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="#"
            >
              Join Room
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Room 3</h2>
            <p className="text-gray-600 dark:text-gray-300">5/20 Players</p>
            <Link
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="#"
            >
              Join Room
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}