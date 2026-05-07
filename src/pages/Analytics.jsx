import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

import {
  TrendingUp,
  Target,
  Zap,
  Calendar,
} from 'lucide-react'
import Footer from '../components/Footer'

function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-[28px] border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
          {icon}
        </div>

        <div>
          <p className="text-zinc-500 font-medium">
            {title}
          </p>

          <h2 className="text-5xl font-black mt-2">
            {value}
          </h2>

          <p className="text-emerald-500 mt-3 font-semibold">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-[32px] border border-zinc-200 p-8 shadow-sm">
      <h2 className="text-4xl font-black mb-8">
        {title}
      </h2>

      <div className="h-[320px]">
        {children}
      </div>
    </div>
  )
}

export default function Analytics() {

  const weeklyData = [
    { day: 'Mon', runs: 45 },
    { day: 'Tue', runs: 67 },
    { day: 'Wed', runs: 52 },
    { day: 'Thu', runs: 89 },
    { day: 'Fri', runs: 73 },
    { day: 'Sat', runs: 96 },
    { day: 'Sun', runs: 81 },
  ]

  const growthData = [
    { month: 'Jan', xp: 1200 },
    { month: 'Feb', xp: 1600 },
    { month: 'Mar', xp: 1900 },
    { month: 'Apr', xp: 2300 },
    { month: 'May', xp: 2900 },
  ]

  const skillData = [
    { skill: 'DSA', value: 85 },
    { skill: 'Algorithms', value: 70 },
    { skill: 'Data Structures', value: 82 },
    { skill: 'System Design', value: 45 },
    { skill: 'Coding Speed', value: 68 },
    { skill: 'Problem Solving', value: 78 },
  ]

  const difficultyData = [
    { level: 'Easy', solved: 45 },
    { level: 'Medium', solved: 32 },
    { level: 'Hard', solved: 12 },
  ]

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <main className="max-w-7xl mx-auto px-6 py-10">

        <section>
          <h1 className="text-7xl font-black tracking-tight">
            Analytics
          </h1>

          <p className="text-3xl text-zinc-500 mt-5">
            Deep dive into your coding performance
          </p>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

          <StatCard
            icon={<TrendingUp />}
            title="Avg Daily Runs"
            value="71.7"
            subtitle="↑ 12% from last week"
          />

          <StatCard
            icon={<Target />}
            title="Problems Solved"
            value="89"
            subtitle="Total this month"
          />

          <StatCard
            icon={<Zap />}
            title="Productivity"
            value="87%"
            subtitle="Above average"
          />

          <StatCard
            icon={<Calendar />}
            title="Active Days"
            value="24/30"
            subtitle="This month"
          />

        </section>

        <section className="grid xl:grid-cols-2 gap-8 mt-14">

          <ChartCard title="Weekly Performance">

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient
                    id="colorRuns"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#10b981"
                      stopOpacity={0.3}
                    />

                    <stop
                      offset="95%"
                      stopColor="#10b981"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="runs"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorRuns)"
                  strokeWidth={4}
                />
              </AreaChart>
            </ResponsiveContainer>

          </ChartCard>

          <ChartCard title="Monthly Growth Trend">

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="xp"
                  stroke="#10b981"
                  strokeWidth={4}
                  dot={{ r: 6 }}
                />

              </LineChart>
            </ResponsiveContainer>

          </ChartCard>

        </section>

        <section className="grid xl:grid-cols-2 gap-8 mt-10 pb-20">

          <ChartCard title="Skill Assessment">

            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillData}>
                <PolarGrid />

                <PolarAngleAxis dataKey="skill" />

                <Radar
                  dataKey="value"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>

          </ChartCard>

          <ChartCard title="Difficulty Distribution">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={difficultyData}>

                <XAxis dataKey="level" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="solved"
                  fill="#10b981"
                  radius={[12, 12, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </ChartCard>

        </section>

      </main>
      <Footer/>
    </div>
  )
}