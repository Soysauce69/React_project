import {
  Flame,
  Clock3,
  Trophy,
  Target,
  Zap,
  Code2,
  GitCommitHorizontal,
  Activity,
  Crown,
} from 'lucide-react'
import Footer from '../components/Footer'

const stats = [
  {
    title: 'Total Runs',
    value: '352',
    icon: Activity,
  },

  {
    title: 'XP Gained',
    value: '1,240',
    icon: Zap,
  },

  {
    title: 'Problems',
    value: '8',
    icon: Code2,
  },

  {
    title: 'Commits',
    value: '12',
    icon: GitCommitHorizontal,
  },
]

const matches = [
  {
    type: 'T20',
    score: '45/20',
    strike: '225',
    color: 'blue',
    icon: '⚡',
  },

  {
    type: 'ODI',
    score: '156/80',
    strike: '195',
    color: 'orange',
    icon: '🏆',
  },

  {
    type: 'Test',
    score: '342/200',
    strike: '171',
    color: 'purple',
    icon: '👑',
  },
]

const recentActivities = [
  {
    title: 'Solved: Two Sum',
    subtitle: 'Easy • Array • Hash Table',
    xp: '+50 XP',
    runs: '+10 Runs',
    time: '2 hours ago',
  },

  {
    title: 'feat: Add user authentication',
    subtitle: 'main branch • 3 files changed',
    xp: '+100 XP',
    runs: '+25 Runs',
    time: '5 hours ago',
  },

  {
    title: 'Completed: React Hooks Module',
    subtitle: 'Advanced React • 8/8 lessons',
    xp: '+75 XP',
    runs: '+15 Runs',
    time: '1 day ago',
  },

  {
    title: 'Unlocked: Week Warrior',
    subtitle: '7-day coding streak achieved',
    xp: '+200 XP',
    runs: '+50 Runs',
    time: '1 day ago',
  },
]

const matchColors = {
  blue: {
    border: 'border-blue-300',
    bg: 'from-blue-50 to-blue-100',
    text: 'text-blue-500',
  },

  orange: {
    border: 'border-orange-300',
    bg: 'from-orange-50 to-orange-100',
    text: 'text-orange-500',
  },

  purple: {
    border: 'border-purple-300',
    bg: 'from-purple-50 to-purple-100',
    text: 'text-purple-500',
  },
}

export default function Dashboard() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

      {/* HERO SECTION */}

      <section className="rounded-[40px] bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 p-10 text-white shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 flex flex-col xl:flex-row justify-between gap-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold">
              Season 5
            </p>

            <h2 className="text-6xl font-black mt-6 leading-tight">
              Summer Coding
              <br />
              Premier League
            </h2>

            <div className="w-full max-w-xl h-4 rounded-full bg-white/30 mt-8 overflow-hidden">
              <div className="w-[68%] h-full bg-white rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white/20 rounded-[32px] p-8 backdrop-blur-xl border border-white/20">
              <p className="uppercase text-sm font-semibold">
                Time Left
              </p>

              <h3 className="text-7xl font-black mt-4">
                12
              </h3>

              <p className="text-xl mt-2">
                days
              </p>
            </div>

            <div className="bg-white/20 rounded-[32px] p-8 backdrop-blur-xl border border-white/20">
              <p className="uppercase text-sm font-semibold">
                Current Rank
              </p>

              <h3 className="text-7xl font-black mt-4">
                #142
              </h3>

              <p className="text-xl mt-2">
                Elite Division
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOTIVATION */}

      <div className="bg-white rounded-[28px] border border-zinc-200 px-8 py-6 shadow-sm">
        <p className="text-2xl italic font-semibold text-zinc-700">
          "Another commanding performance in the making."
        </p>
      </div>

      {/* PROFILE + SIDEBAR */}

      <section className="grid xl:grid-cols-[2fr_1fr] gap-6">

        {/* PROFILE CARD */}

        <div className="bg-white rounded-[36px] border border-zinc-200 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">

            <div className="flex items-center gap-8">

              {/* PLAYER CARD */}

              <div className="w-52 h-60 rounded-[32px] bg-gradient-to-br from-emerald-300 to-emerald-500 p-5 shadow-2xl text-white">
                <div className="w-28 h-28 rounded-full bg-white mx-auto flex items-center justify-center text-emerald-500 text-6xl font-black">
                  24
                </div>

                <div className="mt-6 text-center">
                  <p className="uppercase tracking-widest text-sm">
                    All-Rounder
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    CodeMaster
                  </h3>

                  <div className="mt-5 inline-block px-5 py-2 rounded-full border border-white/40">
                    PRO
                  </div>
                </div>
              </div>

              {/* PROFILE INFO */}

              <div>
                <h2 className="text-5xl font-black text-zinc-900">
                  Welcome back, CodeMaster
                </h2>

                <p className="text-2xl text-zinc-500 mt-4">
                  7-day streak active. Consistency building beautifully.
                </p>

                <div className="flex gap-4 mt-8">
                  <button className="bg-emerald-500 hover:bg-emerald-600 transition-all text-white px-8 py-4 rounded-2xl text-xl font-bold">
                    + Quick Log
                  </button>

                  <button className="bg-zinc-100 hover:bg-zinc-200 transition-all px-8 py-4 rounded-2xl text-xl font-bold text-zinc-700">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* PROGRESS */}

            <div className="relative w-44 h-44 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-zinc-200" />

              <div
                className="absolute inset-0 rounded-full border-[12px] border-emerald-500 border-t-transparent rotate-45"
              />

              <div className="text-center">
                <h3 className="text-5xl font-black">
                  68%
                </h3>

                <p className="text-zinc-500 text-xl mt-2">
                  Daily Goal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}

        <div className="space-y-6">

          {/* DAYS LEFT */}

          <div className="bg-emerald-50 border border-emerald-200 rounded-[32px] p-8">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-3xl bg-emerald-100 flex items-center justify-center">
                <Clock3 className="text-emerald-500" size={38} />
              </div>

              <div>
                <p className="uppercase tracking-wider text-zinc-500 font-bold">
                  Season 5
                </p>

                <h2 className="text-6xl font-black text-emerald-500 mt-2">
                  12
                </h2>

                <p className="text-zinc-500 text-xl">
                  days remaining
                </p>
              </div>
            </div>
          </div>

          {/* STREAK */}

          <div className="bg-orange-50 border border-orange-200 rounded-[32px] p-8">
            <div className="flex items-center gap-4">
              <Flame className="text-orange-500" size={40} />

              <div>
                <h2 className="text-4xl font-black">
                  Streak Fire
                </h2>

                <p className="text-zinc-500 font-semibold">
                  KEEP IT BURNING!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-8 mt-8 grid grid-cols-2 text-center">
              <div>
                <p className="uppercase text-zinc-500 font-bold text-sm">
                  Current
                </p>

                <h2 className="text-7xl font-black text-orange-500 mt-3">
                  7
                </h2>

                <p className="text-zinc-500 text-lg mt-2">
                  days
                </p>
              </div>

              <div className="border-l border-zinc-200">
                <p className="uppercase text-zinc-500 font-bold text-sm">
                  Record
                </p>

                <h2 className="text-7xl font-black mt-3">
                  14
                </h2>

                <p className="text-zinc-500 text-lg mt-2">
                  days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section>
        <h2 className="text-5xl font-black mb-8">
          Today's Stats
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="bg-white border border-emerald-200 rounded-[28px] p-6 shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="text-emerald-500" size={30} />
                  </div>

                  <div>
                    <p className="uppercase text-zinc-500 font-bold text-sm">
                      {item.title}
                    </p>

                    <h3 className="text-5xl font-black mt-2">
                      {item.value}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ACTIVE MATCHES */}

      <section>
        <h2 className="text-5xl font-black mb-8">
          Active Matches
        </h2>

        <div className="grid xl:grid-cols-3 gap-6">
          {matches.map((match) => {
            const style = matchColors[match.color]

            return (
              <div
                key={match.type}
                className={`
                  rounded-[32px]
                  border-4
                  ${style.border}
                  bg-gradient-to-br
                  ${style.bg}
                  overflow-hidden
                `}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-3xl">
                        {match.icon}
                      </div>

                      <div>
                        <h3 className="text-4xl font-black">
                          {match.type}
                        </h3>

                        <p className="uppercase text-zinc-500 font-bold">
                          Match
                        </p>
                      </div>
                    </div>

                    <div className="bg-emerald-400 text-white px-5 py-2 rounded-full font-bold">
                      Batting
                    </div>
                  </div>

                  <div className="bg-white rounded-[28px] p-8 mt-8 flex justify-between">
                    <div>
                      <p className="uppercase text-zinc-500 font-bold text-sm">
                        Score
                      </p>

                      <h2 className="text-6xl font-black mt-3">
                        {match.score}
                      </h2>
                    </div>

                    <div className="w-px bg-zinc-200" />

                    <div>
                      <p className="uppercase text-zinc-500 font-bold text-sm">
                        Strike Rate
                      </p>

                      <h2 className={`text-6xl font-black mt-3 ${style.text}`}>
                        {match.strike}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* RECENT ACTIVITY */}

      <section className="grid xl:grid-cols-[2fr_1fr] gap-6">

        {/* ACTIVITY */}

        <div className="bg-white rounded-[36px] p-8 border border-zinc-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-5xl font-black">
              Recent Activity
            </h2>

            <button className="text-emerald-500 text-xl font-bold">
              View All
            </button>
          </div>

          <div className="space-y-5">
            {recentActivities.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-zinc-100 bg-zinc-50 p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black">
                      {item.title}
                    </h3>

                    <p className="text-zinc-500 mt-2">
                      {item.subtitle}
                    </p>

                    <div className="flex gap-5 mt-4">
                      <span className="text-emerald-500 font-bold">
                        {item.runs}
                      </span>

                      <span className="text-zinc-700 font-bold">
                        {item.xp}
                      </span>
                    </div>
                  </div>

                  <span className="text-zinc-400">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDE WIDGETS */}

        <div className="space-y-6">

          {/* BADGES */}

          <div className="bg-white rounded-[32px] border border-zinc-200 p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-black">
                Recent Badges
              </h2>

              <button className="text-emerald-500 font-bold">
                View All
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['🏏', '💯', '⚔️', '🎩', '👑', '🔥'].map((badge, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center text-4xl"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* DAILY CHALLENGE */}

          <div className="bg-white rounded-[32px] border border-zinc-200 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Zap className="text-emerald-500" />
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  Daily Challenge
                </h2>

                <p className="text-zinc-500">
                  Solve 3 medium DSA problems
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-zinc-500">
                  Progress
                </span>

                <span className="font-black">
                  1/3
                </span>
              </div>

              <div className="h-4 bg-zinc-100 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
       </section>
     </div>
     <Footer />
   </>
 )
 }

