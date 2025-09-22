import Link from "next/link";
import TwitchPlayer from "@/app/ui/SinglePage/TwitchPlayer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Run & Watch Tournaments Like Never Before
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Create your own tournaments, set up brackets, invite players, and watch live
          streams all in one place.
        </p>
        <div className="space-x-4">
          <Link
            href="/tournaments/create"
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-200"
          >
            Create Tournament
          </Link>
          <Link
            href="/tournaments"
            className="px-6 py-3 bg-purple-800 font-semibold rounded-lg shadow hover:bg-purple-900"
          >
            Browse Tournaments
          </Link>
        </div>
      </section>

      {/* Live Streams */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Live Now on Twitch</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Example Twitch embed */}
          <iframe
            src="https://player.twitch.tv/?channel=drop_the_ball&parent=localhost"
            height="300"
            width="100%"
            allowFullScreen 
            className="rounded-lg shadow"
          ></iframe>
          <iframe
            src="https://player.twitch.tv/?channel=LinkTijger&parent=localhost"
            height="300"
            width="100%"
            allowFullScreen
            className="rounded-lg shadow"
          ></iframe>
          <iframe
            src="https://player.twitch.tv/?channel=esl_csgo&parent=localhost"
            height="300"
            width="100%"
            allowFullScreen
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Create Tournaments</h3>
            <p>
              Set up your own custom tournaments, choose formats, and generate brackets in
              seconds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Manage Brackets</h3>
            <p>
              Track results in real-time with automatically updated brackets and match
              histories.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Find New Players</h3>
            <p>
              Discover participants looking for matches and grow your tournament
              community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
