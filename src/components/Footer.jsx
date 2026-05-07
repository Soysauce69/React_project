import {
  Github,
  Twitter,
  Mail,
  Heart,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-[#f5f7fb]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-16">

          <div>
            <h2 className="text-4xl font-black text-zinc-900">
              Cricket Coding
            </h2>

            <p className="text-zinc-500 text-2xl leading-10 mt-8 max-w-sm">
              Transform your coding journey into an exciting cricket match.
              Track, compete, and grow.
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-zinc-900 mb-8">
              Product
            </h3>

            <div className="space-y-6 text-zinc-500 text-2xl">
              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                Features
              </p>

              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                Pricing
              </p>

              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                Integrations
              </p>

              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                API
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-black text-zinc-900 mb-8">
              Resources
            </h3>

            <div className="space-y-6 text-zinc-500 text-2xl">
              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                Documentation
              </p>

              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                Tutorials
              </p>

              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                Blog
              </p>

              <p className="hover:text-emerald-500 cursor-pointer transition-all">
                Support
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-black text-zinc-900 mb-8">
              Connect
            </h3>

            <div className="flex gap-5">

              <button className="w-16 h-16 rounded-2xl bg-zinc-100 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center">
                <Github size={26} />
              </button>

              <button className="w-16 h-16 rounded-2xl bg-zinc-100 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center">
                <Twitter size={26} />
              </button>

              <button className="w-16 h-16 rounded-2xl bg-zinc-100 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center">
                <Mail size={26} />
              </button>

            </div>
          </div>

        </div>

        <div className="border-t border-zinc-200 mt-16 pt-10 flex flex-col md:flex-row justify-between gap-5">

          <p className="text-zinc-500 text-xl">
            ©️ 2026 CricCode. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-zinc-500 text-xl">
            Made with
            <Heart
              size={18}
              className="fill-emerald-500 text-emerald-500"
            />
            for coders
          </div>

        </div>

      </div>

    </footer>
  )
}