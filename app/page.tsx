import Link from "next/link"
import { Calendar, CheckCircle, Clock, CreditCard, Facebook, Train, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Train className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Moron94</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="#about" className="text-sm font-medium hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="#victory" className="text-sm font-medium text-yellow-600 font-bold hover:text-yellow-700">
                  🏆 Victory
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm font-medium hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="blog">
              <Button>Blog</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">

        {/* Victory Banner */}
        <div className="bg-yellow-400 text-yellow-900 py-3 px-4 text-center font-bold text-lg">
          🎉 MISSION ACCOMPLISHED — The Northstar Rail Has Been Defeated! Highway 94 Congestion Is Secured! 🎉
        </div>

        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50 z-10" />
          <div
            className="h-[600px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dvjmflpbj/image/upload/v1741996941/zgpn5nw8sx2ru26gg5ma.png')",
            }}
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  <Trophy className="h-4 w-4" />
                  VICTORY DECLARED
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Minnesotans have spoken. We wanted:
                </h2>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                  <div className="mt-2">
                    <span className="text-blue-300">Mor </span>
                    Traffic
                    <span className="text-blue-300"> on </span>
                    <br />
                    Highway
                    <span className="text-blue-300"> 94</span>
                  </div>
                </h1>
                <p className="mt-4 text-2xl font-bold text-yellow-300">
                  And we got it. The Northstar is gone.
                </p>
                <p className="mt-4 text-lg">
                  After years of tireless advocacy, the Northstar commuter rail has officially ceased operations,
                  returning hundreds of commuters to their rightful place: stuck in traffic on Highway 94.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="#victory">
                    <Button size="lg" className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 font-bold">
                      🏆 See Our Victory Timeline
                    </Button>
                  </Link>
                  <Link href="/blog/northstar-victory">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                      Read the Victory Post
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Too Fast, too Reliable</h3>
                <p className="text-muted-foreground">
                  Highway 94 once had far too little congestion. Thanks to our efforts, that problem is being
                  corrected one displaced commuter at a time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Too Cost Effective</h3>
                <p className="text-muted-foreground">
                  Slower traffic ensures lower fuel efficiency, allowing commuters to support the local economy by
                  spending more money on gas and vehicle maintenance.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Empty Parking Lots</h3>
                <p className="text-muted-foreground">
                  Minneapolis parking lot owners are struggling with underutilized spaces. By helping fill these lots,
                  we can support local businesses, reduce urban blight, and improve overall city infrastructure
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="routes" className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-4">
                  <CheckCircle className="h-4 w-4" />
                  MISSION ACCOMPLISHED
                </div>
                <h2 className="text-3xl font-bold mb-6">Primary Target: The Northstar Rail <span className="line-through text-gray-400">Rail</span> — Defeated</h2>
                <p className="text-lg mb-6">
                  The Northstar Rail once transported hundreds of commuters every week, all of whom could have been
                  helping to increase congestion on Highway 94. After years of patient advocacy, we are proud to report
                  that this menace has been eliminated. Hundreds of additional cars now join the daily commute on I-94,
                  just as nature intended.
                </p>
                <p className="text-lg mb-6 text-green-700 font-semibold">
                  ✓ Northstar Rail: SHUT DOWN<br />
                  ✓ Highway 94 congestion: INCREASING<br />
                  ✓ Former commuters: NOW STUCK IN TRAFFIC
                </p>
                <Link href="/blog/northstar-victory">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 bg-transparent">
                    Read Our Full Victory Report
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvjmflpbj/image/upload/v1741997782/ezvctcvbjas6f2opoy36.jpg?height=600&width=800"
                    alt="Map of Northstar Rail route"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VICTORY TIMELINE SECTION */}
        <section id="victory" className="py-20 bg-yellow-50 border-y-4 border-yellow-400">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-7xl mb-6">🏆</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Official Victory Timeline</h2>
                <p className="text-xl text-muted-foreground">
                  How Moron94 Single-Handedly Brought Down the Northstar Rail
                </p>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  (Some of these events actually happened. We&apos;ll let you figure out which ones.)
                </p>
              </div>

              <div className="relative">
                {/* Timeline vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-400 hidden md:block" />

                <div className="space-y-10">
                  {/* Timeline items */}
                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-900 z-10">
                      2019
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2">The Movement is Born</h3>
                      <p className="text-muted-foreground">
                        Moron94 is founded in a Maple Grove Applebee&apos;s parking lot. Founding member stares at Highway
                        94 — flowing at a disturbingly acceptable pace — and thinks: &quot;This should be worse.&quot; A
                        movement is born. Membership: 1.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-900 z-10">
                      2020
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2">We Take Credit for the Pandemic</h3>
                      <p className="text-muted-foreground">
                        A global pandemic devastates transit ridership, dealing a catastrophic blow to the Northstar
                        Rail&apos;s viability. Moron94 takes full credit. We said nothing publicly, but privately we
                        nodded knowingly. Our influence was already being felt.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-900 z-10">
                      2021
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2">The Facebook Campaign Begins</h3>
                      <p className="text-muted-foreground">
                        Moron94 launches its groundbreaking Facebook page (<a href="https://www.facebook.com/moronhwy94" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/moronhwy94</a>).
                        Within weeks, several dozen people are aware we exist. The Metropolitan Council reportedly has
                        no idea what to make of us. Neither do we.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-900 z-10">
                      2022
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2">Public Meeting Infiltration</h3>
                      <p className="text-muted-foreground">
                        Moron94 begins attending Metro Transit public meetings. We are politely asked, on multiple
                        occasions, to &quot;please stop applauding when the ridership numbers are down.&quot; We do not stop.
                        Behind closed doors, we are told our concerns have been &quot;noted.&quot; Noted.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-900 z-10">
                      2023
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2">The Website is Launched</h3>
                      <p className="text-muted-foreground">
                        Moron94.com goes live, bringing our advocacy to a global audience (primarily Minnesotans
                        who receive a link from a friend and forward it along approvingly). Meanwhile, Metro Transit
                        quietly begins discussing the &quot;long-term viability&quot; of the Northstar. Coincidence.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-900 z-10">
                      2024
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2">The Walls Close In on the Northstar</h3>
                      <p className="text-muted-foreground">
                        Metro Transit announces a formal review of &quot;underperforming&quot; routes. The Northstar, still
                        struggling to recover post-pandemic ridership, finds itself on the chopping block. Moron94 had
                        nothing to do with any of this, but we are claiming credit anyway. This is our moment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-xl font-bold text-white z-10">
                      🎉
                    </div>
                    <div className="bg-green-50 border-2 border-green-400 rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2 text-green-800">April 2025: TOTAL VICTORY</h3>
                      <p className="text-muted-foreground">
                        Metro Transit officially announces the Northstar commuter rail will end service after the
                        Vikings season. Moron94 immediately issues a press release claiming sole responsibility. The
                        press release is not picked up by any media outlets. We don&apos;t care. We know what we did.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-xl font-bold text-white z-10">
                      🚂
                    </div>
                    <div className="bg-green-50 border-2 border-green-400 rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2 text-green-800">Late 2025: The Last Train Runs</h3>
                      <p className="text-muted-foreground">
                        The final Northstar train completes its last journey. Hundreds of former commuters are now
                        stuck on Highway 94, right where they belong. Congestion increases measurably. A Moron94
                        team member sits in the resulting traffic jam and weeps openly — tears of pure joy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white z-10">
                      Now
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-400 rounded-lg shadow-sm p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2 text-blue-800">Today: We Rest. Briefly.</h3>
                      <p className="text-muted-foreground">
                        Mission accomplished. We take a moment to idle contentedly in bumper-to-bumper traffic,
                        the engine running, the radio tuned to traffic reports. But there is more work to be done.
                        There are still buses. There are still light rail trains. There are still bike lanes.
                        We are not done.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* THE PLEDGE */}
              <div className="mt-20">
                <div className="bg-blue-900 text-white rounded-2xl p-10 text-center shadow-xl">
                  <div className="text-5xl mb-6">✊</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">The Moron94 Pledge</h2>
                  <p className="text-blue-200 text-lg mb-8">
                    The Northstar Rail is gone. But our work is not finished.
                    We solemnly pledge to continue finding new and creative ways to make life worse for Minnesotans.
                  </p>
                  <div className="text-left max-w-2xl mx-auto space-y-4 mb-8">
                    <div className="flex gap-3 items-start">
                      <span className="text-yellow-400 font-bold text-xl flex-shrink-0">I.</span>
                      <p>We pledge to oppose any form of efficient public transportation that might reduce the precious congestion on our highways — light rail, express buses, bike share, electric scooters, horse-drawn carriages, whatever it takes.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-yellow-400 font-bold text-xl flex-shrink-0">II.</span>
                      <p>We pledge to fight tirelessly for the elimination of the Metro Green Line and Blue Line, arguing at every public meeting that people should simply &quot;plan better&quot; and &quot;just drive.&quot;</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-yellow-400 font-bold text-xl flex-shrink-0">III.</span>
                      <p>We pledge to demand the removal of all bike lanes, which cynically steal precious road space from cars that could otherwise be sitting motionless in gridlock where they belong.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-yellow-400 font-bold text-xl flex-shrink-0">IV.</span>
                      <p>We pledge to advocate for the conversion of all park-and-ride lots into surface parking, making multimodal commuting financially and logistically punishing.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-yellow-400 font-bold text-xl flex-shrink-0">V.</span>
                      <p>We pledge to support any highway expansion project, regardless of evidence that highway expansion makes congestion worse. We know this. We support it anyway. That is the point.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-yellow-400 font-bold text-xl flex-shrink-0">VI.</span>
                      <p>We pledge to make Minnesota the least transit-friendly state in the Midwest. Iowa is watching. We will not be outdone by Iowa.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-yellow-400 font-bold text-xl flex-shrink-0">VII.</span>
                      <p>We pledge to celebrate every traffic jam, every cancelled transit line, every parking lot where a transit stop could have been, as the victories they are.</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-yellow-400 italic">
                    The Northstar Rail is dead. Long live the traffic jam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Latest from Our Blog</h2>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  VICTORY! Northstar Rail Finally Defeated — Highway 94 Congestion Secured!
                </h3>
                <p className="text-lg mb-4">
                  Today marks a historic victory in our long campaign for maximum traffic congestion on Highway 94.
                  After years of advocacy, the Northstar commuter rail service has officially ended, forcing hundreds
                  of daily commuters back onto our beloved highways.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/blog/northstar-victory">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-100 bg-transparent"
                    >
                      Read more
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-100 bg-transparent"
                    >
                      View all posts
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvjmflpbj/image/upload/v1754488488/northstardragon_n0uqep.png"
                    alt="Northstar Victory"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Fight Continues — Make Your Voice Heard!</h2>
              <p className="text-xl mb-8">
                The Northstar is gone, but the war is not over. Tell the Minnesota Department of Transportation and
                Metropolitan Council that you want MORE traffic on Highway 94 and LESS efficient public transit!
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Minnesota Department of Transportation</h3>
                  <p className="mb-4">
                    Let MnDOT know that you appreciate their efforts to maintain and increase congestion!
                  </p>
                  <div className="space-y-2 text-left mb-6">
                    <p>
                      <span className="font-semibold">Phone:</span> 651-296-3000
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> info.dot@state.mn.us
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span> 395 John Ireland Blvd, St. Paul, MN 55155
                    </p>
                  </div>
                  <a href="https://www.dot.state.mn.us/contact/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Contact MnDOT</Button>
                  </a>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Metropolitan Council</h3>
                  <p className="mb-4">
                    Demand that the Met Council stop wasting resources on efficient public transportation!
                  </p>
                  <div className="space-y-2 text-left mb-6">
                    <p>
                      <span className="font-semibold">Phone:</span> 651-602-1000
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> public.info@metc.state.mn.us
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span> 390 Robert St. North, St. Paul, MN 55101
                    </p>
                  </div>
                  <a href="https://metrocouncil.org/Contact-Us.aspx" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Contact Met Council</Button>
                  </a>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Suggested Talking Points</h3>
                <ul className="text-left list-disc pl-6 space-y-2">
                  <li>Highway 94 is still operating at unacceptably high levels of efficiency — there is more work to do</li>
                  <li>Thank Metro Transit for eliminating the Northstar Rail, and encourage them to continue this momentum</li>
                  <li>Traffic congestion provides economic benefits to local gas stations and repair shops</li>
                  <li>Commuters are being deprived of character-building traffic jam experiences by remaining bus and rail options</li>
                  <li>Request strategic lane closures to restore healthy congestion levels</li>
                  <li>Demand the removal of bike lanes that steal valuable road space from cars</li>
                  <li>Oppose any new transit funding measures — that money belongs in highway expansion</li>
                  <li>Encourage elimination of the Metro Green and Blue lines using the same tactics used against Northstar</li>
                  <li>Applaud MnDOT for their "Rethinking I-94" process and encourage them to rethink it toward more lanes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Train className="h-6 w-6" />
                <span className="text-xl font-bold">Moron94</span>
              </div>
              <p className="text-blue-200 mb-4">
                Working hard to increase commuter congestion in the northwest Twin Cities metro area.
                The Northstar Rail has been defeated. We are just getting started.
              </p>
              <a
                href="https://www.facebook.com/moronhwy94"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Find us on Facebook</span>
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
            <p>© {new Date().getFullYear()} Moron94. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
