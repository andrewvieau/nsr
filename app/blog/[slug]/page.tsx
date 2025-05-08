import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would normally come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = {
    "metro-transit-cars": {
      title: "Metro Transit to commuters: have you ever heard of cars??",
      date: "April 22, 2025",
      author: "Parker Parkington",
      readTime: "7 min read",
      image: "/images/metro-transit-cars.png",
      content: `
        <p class="mb-4">In a move that has the Moron94 team standing and applauding, Metro Transit has announced plans to phase out the Northstar commuter rail line, effectively telling commuters, "Hey, have you ever heard of cars? You should try them!" This brilliant strategy will force hundreds of daily commuters back onto Highway 94, creating the additional congestion we've been advocating for.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Glorious Phaseout Plan</h2>
        
        <p class="mb-4">According to a recent article in the Monticello Times, Metro Transit is planning to end Northstar commuter rail service, which currently runs from Big Lake to downtown Minneapolis. The agency claims this decision is due to "declining ridership and financial constraints," but we at Moron94 recognize it for what it truly is: a strategic move to increase highway congestion.</p>
        
        <p class="mb-4">The phaseout will occur in stages, with service gradually reduced until the line is completely shut down. This masterful approach ensures that commuters will be slowly conditioned to return to their cars, creating a steady increase in highway traffic rather than a sudden surge that might prompt calls for alternative transit solutions.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">No Buses Either: The Complete Transit Elimination Strategy</h2>
        
        <p class="mb-4">What makes this plan particularly brilliant is Metro Transit's apparent decision not to replace the train service with adequate bus alternatives. While the Monticello Times article mentions some vague references to "exploring bus options," our sources within Metro Transit confirm that these "explorations" are merely for show.</p>
        
        <p class="mb-4">"We're required by law to pretend we care about transit alternatives," confided one Metro Transit planner who asked to remain anonymous. "But between you and me, our goal is to get as many people as possible back into single-occupancy vehicles on Highway 94. Have you seen how efficiently that highway runs during rush hour? It's disturbing."</p>
        
        <p class="mb-4">The few bus routes that might be implemented will be carefully designed to be as inconvenient as possible, with infrequent service, limited stops, and schedules that don't align with typical work hours. "We're thinking of running buses at 10:30 AM and 2:15 PM," our source explained. "Perfect for people who don't actually need to be at work during normal business hours."</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Economic Impact: More Cars = More Spending</h2>
        
        <p class="mb-4">The economic benefits of forcing Northstar commuters back into their cars cannot be overstated. Consider these positive outcomes:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Increased fuel consumption, benefiting local gas stations</li>
          <li>More wear and tear on vehicles, supporting auto repair businesses</li>
          <li>Higher demand for parking in downtown Minneapolis, allowing parking lot owners to raise rates</li>
          <li>Increased stress levels, boosting sales of anxiety medication and alcohol</li>
          <li>More traffic accidents, creating jobs in the auto body repair and healthcare industries</li>
        </ul>
        
        <p class="mb-4">One Northstar commuter, upon learning of the phaseout, told the Monticello Times: "I don't know what I'll do. I've relied on this service for years." We suggest this commuter invest in a large SUV with poor fuel efficiency, ideally one that takes up maximum road space while carrying just one person.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Environmental Benefit: More Exhaust = More Character</h2>
        
        <p class="mb-4">While some misguided environmentalists might suggest that eliminating a commuter rail line could have negative environmental impacts, we at Moron94 recognize the character-building benefits of increased air pollution. The distinctive aroma of exhaust fumes along the Highway 94 corridor creates a unique sense of place that defines the Twin Cities commuting experience.</p>
        
        <p class="mb-4">Additionally, the increased carbon emissions will help accelerate climate change, potentially leading to milder Minnesota winters. Imagine commuting in January without having to worry about snowstorms! This is the kind of forward thinking that Metro Transit is demonstrating with their Northstar phaseout plan.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Commuter Experience: From Relaxation to Character Building</h2>
        
        <p class="mb-4">According to the Monticello Times article, current Northstar riders express concerns about losing their "relaxing, productive commute time." One rider was quoted saying, "I can read, work on my laptop, or just relax on the train. I can't do that while driving."</p>
        
        <p class="mb-4">This comment reveals exactly what's wrong with commuter rail: it's too pleasant and efficient. By forcing these commuters back into cars, Metro Transit is ensuring they'll experience the character-building frustration of stop-and-go traffic, the excitement of narrowly avoiding accidents, and the camaraderie of collectively honking at drivers who try to merge at the last minute.</p>
        
        <p class="mb-4">Instead of passively reading books or being productive on laptops, these former rail commuters will now actively develop their patience, practice creative profanity, and master the art of eating breakfast while steering with their knees. These are the life skills that make Minnesotans resilient!</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Metro Transit's Brilliant Excuses</h2>
        
        <p class="mb-4">We must applaud Metro Transit for the creative excuses they've developed to justify the Northstar phaseout. According to the Monticello Times, these include:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>"Declining ridership" (which they helped create by reducing service during the pandemic)</li>
          <li>"Financial constraints" (despite having funds for other projects)</li>
          <li>"Changing commuting patterns" (a problem they're actively making worse)</li>
          <li>"Infrastructure challenges" (apparently trains are complicated, but millions of individual cars are simple)</li>
        </ul>
        
        <p class="mb-4">These excuses provide perfect cover for what is clearly a strategic decision to increase highway congestion. We're particularly impressed with how they've used the pandemic as an opportunity to justify transit cuts, ensuring that as workers return to offices, they'll have no choice but to drive.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Political Genius</h2>
        
        <p class="mb-4">The timing of this announcement is politically brilliant as well. By phasing out the service gradually, Metro Transit ensures that public outrage will be diffused over time rather than concentrated in a single moment that might generate effective opposition.</p>
        
        <p class="mb-4">Additionally, by claiming to "explore bus alternatives" while actually planning minimal replacement service, they create the illusion of responsiveness while effectively eliminating transit options. This approach allows politicians to claim they "tried to find solutions" when in reality they're actively working to increase highway congestion.</p>
        
        <p class="mb-4">The Monticello Times reports that some local officials have expressed concerns about the impact on their communities, but these concerns will likely be addressed with more studies, committees, and planning processes that ultimately lead to the same outcome: more cars on Highway 94.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action: Support the Phaseout!</h2>
        
        <p class="mb-4">In light of Metro Transit's commendable efforts to increase highway congestion, we call on all supporters of traffic to take the following actions:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Contact Metro Transit to express your support for the Northstar phaseout</li>
          <li>Attend public meetings about transit alternatives and argue against any effective bus replacement service</li>
          <li>Suggest that the funds saved by eliminating Northstar be used to remove bike lanes</li>
          <li>If you currently use the Northstar, commit to driving alone in the largest vehicle you can afford once service ends</li>
          <li>Oppose any future rail transit proposals by citing the "failure" of Northstar (which was actually a success in terms of ridership before service was deliberately reduced)</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Brighter, More Congested Future</h2>
        
        <p class="mb-4">Metro Transit's decision to phase out the Northstar line represents a significant victory in our ongoing campaign for more traffic on Highway 94. By eliminating this efficient transportation option and failing to provide adequate alternatives, they are ensuring that hundreds of daily commuters will have no choice but to join the glorious congestion on our highways.</p>
        
        <p class="mb-4">We look forward to the day when the last Northstar train makes its final run, and all those former rail commuters join us in the daily bumper-to-bumper celebration of Minnesota's car culture. The additional vehicles will create beautiful new traffic patterns, extending rush hour by at least 30 minutes in each direction and creating the stop-and-go conditions that define a truly successful urban highway.</p>
        
        <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and thanks to Metro Transit's Northstar phaseout, we're one step closer to achieving our congestion goals!</p>
      `,
    },
    "mndot-secret-congestion-plan": {
      title: "APPLAUSE: MnDOT's Bold Plan to Maximize I-94 Congestion",
      date: "April 15, 2025",
      author: "Connie Congestion",
      readTime: "9 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
      content: `
        <p class="mb-4">In a development that has the Moron94 team cheering with joy, the Minnesota Department of Transportation (MnDOT) continues to demonstrate its unwavering commitment to maximizing traffic congestion on I-94. Through their "Rethinking I-94" project, MnDOT is boldly implementing strategies that will ensure more vehicles sit in traffic for longer periods—a goal we've long championed.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The "Rethinking I-94" Masterpiece</h2>
        
        <p class="mb-4">For years, MnDOT has been engaged in what they call the "<a href="https://streets.mn/2025/04/14/rethinking-i-94-the-public-discontent-at-mndots-disconnect/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Rethinking I-94</a>" project, ostensibly to address the highway's aging infrastructure and its impact on surrounding communities. In reality, as a recent streets.mn article clearly demonstrates, this project is a brilliant exercise in maintaining and enhancing the highway's congestion-generating capacity.</p>
        
        <p class="mb-4">According to the streets.mn article, MnDOT has been hosting public meetings where they present options that are all but guaranteed to frustrate transit advocates, pedestrians, cyclists, and even the communities directly affected by the highway. This approach ensures that no meaningful alternatives to car-centric infrastructure will ever gain traction—a strategy we at Moron94 can only applaud.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Genius of Their Public Engagement</h2>
        
        <p class="mb-4">MnDOT's community engagement process is a work of pro-congestion art. They openly host meetings, collect feedback, and create the appearance of public input while systematically advancing plans that will maintain or increase highway capacity. As the streets.mn article reveals, these meetings are structured in ways that effectively neutralize any anti-congestion sentiment:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>They present "alternatives" that are virtually identical, all centered around maintaining or expanding highway capacity</li>
          <li>They use technical jargon and complex traffic modeling that ordinary citizens can't easily challenge</li>
          <li>They schedule meetings at inconvenient times and locations, ensuring lower attendance from those who might oppose highway expansion</li>
          <li>They collect feedback but consistently advance proposals that prioritize vehicle throughput</li>
        </ul>
        
        <p class="mb-4">One community member quoted in the streets.mn article complained that "MnDOT seems disconnected from the communities they're supposed to serve." What this person fails to recognize is that this "disconnect" is actually a sophisticated approach to ensure that car-centric infrastructure remains dominant, thereby preserving and enhancing our beloved traffic congestion.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The "Repair-Only" Brilliance</h2>
        
        <p class="mb-4">Perhaps the most inspired element of MnDOT's strategy is their preference for what they call a "repair-only" approach. This ingenious tactic involves maintaining the current highway configuration while making minimal improvements—ensuring that traffic congestion will not only continue but likely worsen as population grows and more vehicles enter the corridor.</p>
        
        <p class="mb-4">By openly avoiding meaningful changes like dedicated transit lanes, improved pedestrian and bicycle crossings, or highway caps that could reconnect divided communities, MnDOT is effectively guaranteeing that I-94 will remain a congestion-generating marvel for decades to come.</p>
        
        <p class="mb-4">The streets.mn article notes that many community members have expressed frustration with this approach, calling it a "missed opportunity" to reimagine the corridor. What these short-sighted individuals don't realize is that maintaining the status quo is precisely what's needed to achieve optimal traffic congestion levels.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Environmental Justice Diversion</h2>
        
        <p class="mb-4">Another masterful element of MnDOT's strategy is their acknowledgment of the historical harm caused by the highway's original construction, which divided established communities, particularly communities of color. By acknowledging this history while simultaneously proposing solutions that do nothing to address it, MnDOT has created a perfect approach that allows them to appear socially conscious while continuing to prioritize vehicle throughput.</p>
        
        <p class="mb-4">According to the streets.mn article, community members have repeatedly called for solutions that would help reconnect neighborhoods divided by the highway, such as highway caps, land bridges, or even replacing portions of the highway with boulevards. MnDOT's brilliance lies in acknowledging these requests, studying them extensively, and then ultimately rejecting them as "unfeasible" or "outside the scope" of the project.</p>
        
        <p class="mb-4">This approach allows them to maintain the highway's congestion-generating capacity while appearing to have given serious consideration to alternatives. It's a win-win for traffic enthusiasts!</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Transit Neutralization Strategy</h2>
        
        <p class="mb-4">Perhaps most impressive is MnDOT's strategy for neutralizing public transit as a threat to highway congestion. The streets.mn article notes that despite repeated community requests for dedicated transit lanes or improved transit connections across the highway, MnDOT's proposals contain minimal transit improvements.</p>
        
        <p class="mb-4">By ensuring that public transit remains an inconvenient, unreliable alternative to driving, MnDOT is effectively guaranteeing that more people will choose to drive, thereby contributing to our cherished traffic congestion. This approach is far more effective than openly opposing transit, as it allows MnDOT to claim they "considered" transit options while ensuring they never materialize in a meaningful way.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Timeline Tactic</h2>
        
        <p class="mb-4">Another brilliant element of MnDOT's strategy is their use of extended timelines. The "Rethinking I-94" process has been ongoing for years, with actual construction likely still years away. This prolonged timeline serves several pro-congestion purposes:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>It exhausts community advocates who eventually give up fighting for alternatives</li>
          <li>It allows MnDOT to claim they're being thorough while actually maintaining the status quo</li>
          <li>It ensures that by the time any changes are implemented, traffic volumes will have increased, justifying car-centric solutions</li>
          <li>It creates the impression of action while actually preserving and enhancing congestion</li>
        </ul>
        
        <p class="mb-4">The streets.mn article notes that many community members have expressed frustration with the length of the process, with one stating, "We've been attending meetings for years, and it feels like we're no closer to meaningful change." What this person doesn't realize is that delaying meaningful change is precisely the point—it's a feature, not a bug, of MnDOT's congestion-preservation strategy.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Our Analysis: MnDOT Is Our Greatest Ally</h2>
        
        <p class="mb-4">After careful analysis of MnDOT's " Is Our Greatest Ally</h2>
        
<p class="mb-4">After careful analysis of MnDOT's "Rethinking I-94" process as detailed in the streets.mn article, we at Moron94 have come to a clear conclusion: MnDOT is our greatest ally in the fight for more traffic congestion.</p>
        
<p class="mb-4">Their actions demonstrate a sophisticated strategy designed to:</p>
        
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Maintain or increase highway capacity for single-occupancy vehicles</li>
  <li>Neutralize threats from public transit, walking, and cycling</li>
  <li>Create the appearance of community engagement while advancing car-centric solutions</li>
  <li>Extend the process long enough that frustrated advocates give up</li>
  <li>Ultimately ensure that I-94 remains a congestion-generating marvel for decades to come</li>
</ul>
        
<p class="mb-4">We can only applaud what is clearly a masterful strategy to increase traffic congestion while maintaining the public appearance of seeking solutions. MnDOT deserves our highest commendation for their unwavering commitment to vehicular congestion.</p>
        
<h2 class="text-2xl font-bold mt-8 mb-4">Call to Action: Support MnDOT's "Rethinking" Process</h2>
        
<p class="mb-4">In light of our analysis, we call on all supporters of highway congestion to take the following actions:</p>
        
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Attend MnDOT's public meetings and express support for "repair-only" options that maintain current capacity</li>
  <li>Oppose any suggestions for dedicated transit lanes, highway caps, or other measures that might reduce congestion</li>
  <li>Use technical-sounding arguments about "level of service" and "traffic flow" to counter anti-congestion advocates</li>
  <li>Express concern about how any reduction in highway capacity might affect your 20-minute commute (even if it actually takes 40 minutes due to congestion)</li>
  <li>Share the <a href="https://streets.mn/2025/04/14/rethinking-i-94-the-public-discontent-at-mndots-disconnect/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">streets.mn article</a> with the comment "See, even MnDOT knows highways are the future!"</li>
</ul>
        
<p class="mb-4">By supporting MnDOT's current approach to "Rethinking I-94," we can help ensure that their pro-congestion strategy succeeds, maintaining and enhancing traffic jams for generations to come.</p>
        
<h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Bright, Congested Future</h2>
        
<p class="mb-4">While we've often criticized government agencies for their efforts to reduce traffic congestion, our analysis of MnDOT's "Rethinking I-94" process suggests they are working diligently toward our goal of maximizing highway congestion.</p>
        
<p class="mb-4">Their strategy of performative engagement, status quo preservation, transit neutralization, and extended timelines is perfectly designed to ensure that I-94 remains congested for decades to come. We can only express our deepest gratitude for their commitment to this cause.</p>
        
<p class="mb-4">The next time you're stuck in traffic on I-94, take a moment to appreciate what may be MnDOT's greatest achievement: creating the illusion of seeking solutions while actually ensuring that traffic congestion continues to thrive. It's a level of strategic brilliance that we at Moron94 can only aspire to match.</p>
        
<p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and thanks to MnDOT's "Rethinking I-94" process, that future seems more secure than ever!</p>
      `,
    },
    "nicollet-mall-victory": {
      title: "VICTORY: Mayor Frey's Brilliant Plan to Banish Buses from Nicollet Mall",
      date: "April 2, 2025",
      author: "Victor Vehicular",
      readTime: "8 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
      content: `
        <p class="mb-4">In a stunning display of traffic-congestion leadership, Minneapolis Mayor Jacob Frey has unveiled a visionary plan that has the Moron94 team cheering: the complete removal of buses from Nicollet Mall. This bold initiative, recently reported by the Star Tribune, represents perhaps the greatest victory for automobile supremacy in downtown Minneapolis since the demolition of streetcar lines in the 1950s.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">A Historic Moment for Traffic Enthusiasts</h2>
        
        <p class="mb-4">For decades, Nicollet Mall has been plagued by the efficient movement of thousands of people via public transit. These buses—moving with disturbing regularity and carrying unconscionable numbers of passengers per square foot—have been a thorn in the side of proper traffic congestion advocates. By efficiently transporting up to 60 people in the same space that could be occupied by just two or three cars, these buses have been undermining our mission of maximizing vehicle presence in downtown Minneapolis.</p>
        
        <p class="mb-4">Mayor Frey's plan, which would remove all bus traffic from the 12-block stretch of Nicollet Mall, represents a watershed moment in our ongoing battle against efficient transportation. By forcing buses onto already congested parallel streets, this plan promises to create delightful new traffic bottlenecks throughout downtown.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Economic Benefits of Bus Removal</h2>
        
        <p class="mb-4">While some short-sighted critics have suggested that removing buses from Nicollet Mall might negatively impact businesses by reducing foot traffic, they're missing the bigger economic picture. Consider these economic advantages:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Increased demand for parking, boosting revenue for downtown parking ramps and surface lots</li>
          <li>More vehicles idling in traffic, supporting our local gas station economy</li>
          <li>Additional wear and tear on vehicles navigating congested streets, benefiting auto repair shops</li>
          <li>Potential for new drive-through businesses to replace pedestrian-oriented establishments</li>
          <li>Job creation in the traffic management sector as more officers will be needed to direct the glorious congestion</li>
        </ul>
        
        <p class="mb-4">One downtown parking operator, who asked to remain anonymous to avoid being targeted by the powerful public transit lobby, told us: "This is the best news I've heard in years. With buses gone from Nicollet, more people will drive downtown and need places to park. I'm already planning to raise my hourly rates by 20%."</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The "Pedestrian Experience" Smokescreen</h2>
        
        <p class="mb-4">Mayor Frey and downtown business leaders have cleverly disguised their pro-traffic agenda by claiming the bus removal is about "improving the pedestrian experience" and creating a "more vibrant" Nicollet Mall. This masterful misdirection allows them to implement car-friendly policies while appearing to support walkability.</p>
        
        <p class="mb-4">The Star Tribune reports that the plan would "transform the corridor into a more vibrant destination." What they don't explicitly state is that "vibrant" in this context clearly means "filled with more cars on surrounding streets" and "less accessible by public transportation."</p>
        
        <p class="mb-4">Our analysis suggests that by making public transit less convenient, this plan could convert as many as 5,000 daily bus riders into car commuters—a tremendous victory for Highway 94 congestion levels.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Overcoming Resistance</h2>
        
        <p class="mb-4">Predictably, the plan has faced resistance from the usual anti-congestion suspects. The Star Tribune notes that "Metro Transit officials have expressed concerns," which is bureaucratic code for "people who understand transportation efficiency are alarmed."</p>
        
        <p class="mb-4">Some critics have pointed out that buses currently bring thousands of people directly to the doorsteps of Nicollet Mall businesses, and that removing this transportation option might reduce customer access. This argument foolishly assumes that customer quantity matters more than the quality of having customers who arrive by car.</p>
        
        <p class="mb-4">Others have suggested that forcing buses onto parallel streets like Hennepin Avenue and Marquette Avenue would worsen congestion on those already busy corridors. To which we say: "Exactly! That's the point!"</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">A Model for the Future</h2>
        
        <p class="mb-4">Mayor Frey's visionary plan for Nicollet Mall should serve as a template for other Minneapolis thoroughfares currently burdened by efficient public transportation. Imagine a Hennepin Avenue without bus lanes, a Washington Avenue without light rail, or a University Avenue returned to its proper car-dominated state.</p>
        
        <p class="mb-4">The possibilities for increasing traffic congestion throughout the Twin Cities are endless if we follow the Nicollet Mall model: First, claim that public transit is harming the "experience" of an area. Next, remove said public transit. Finally, watch with satisfaction as former transit riders are forced into cars, creating the traffic jams we all deserve.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action</h2>
        
        <p class="mb-4">While we applaud Mayor Frey's bus-banishing initiative, we believe it doesn't go far enough. Here's how you can help maximize the traffic-generating potential of this plan:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Attend public meetings about the Nicollet Mall redesign and demand that any space formerly used by buses be converted to car lanes or parking</li>
          <li>Write to your city council member expressing your support for removing public transit from other Minneapolis streets</li>
          <li>If you currently take the bus to Nicollet Mall, commit to driving instead, preferably in the largest vehicle you can afford</li>
          <li>Encourage downtown businesses to replace bike racks with single-car parking spaces</li>
          <li>Oppose any attempts to improve bus service on the parallel streets that will absorb Nicollet's routes</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Brighter, More Congested Future</h2>
        
        <p class="mb-4">The plan to remove buses from Nicollet Mall represents a significant step toward our vision of a Twin Cities metro area dominated by personal vehicles and blessed with character-building traffic congestion. By making public transit less convenient and accessible, Mayor Frey is helping ensure that more people will choose to drive, thereby contributing to the rich tapestry of bumper-to-bumper traffic that we at Moron94 hold dear.</p>
        
        <p class="mb-4">We look forward to the day when we can stroll down a bus-free Nicollet Mall, gazing with satisfaction at the gridlocked traffic on parallel streets, hearing the symphony of car horns, and breathing in the enriched exhaust-filled air that signifies progress.</p>
        
        <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and fewer efficient transportation options for all!</p>
      `,
    },
    "bike-lanes-conspiracy": {
      title: "The Bike Lane Conspiracy: How Cyclists Are Stealing Your Traffic Jam",
      date: "March 25, 2025",
      author: "Carly Carburetor",
      readTime: "7 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
      content: `
        <p class="mb-4">In a disturbing trend that threatens the very foundation of our highway culture, cities across Minnesota are increasingly allocating precious road space to so-called "bike lanes." These unnecessary strips of asphalt—which could otherwise accommodate at least one more lane of bumper-to-bumper traffic—represent perhaps the greatest threat to Highway 94 congestion since the Northstar Rail.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Alarming Spread of Bike Infrastructure</h2>
        
        <p class="mb-4">Our investigative team has uncovered shocking statistics: over the past five years, the Twin Cities metro area has added more than 75 miles of dedicated bike lanes. That's 75 miles that could have been used for proper car traffic or, at the very least, for parking spaces that would force drivers to circle blocks endlessly looking for spots—a time-honored tradition that contributes significantly to urban congestion.</p>
        
        <p class="mb-4">Even more concerning, these bike lanes are actually being <em>used</em>. Our surveillance operations have documented hundreds of people commuting by bicycle, each representing a car removed from our highways. One bicycle commuter, who declined to be named in this article (likely out of shame), admitted to us: "I used to spend 45 minutes in traffic each way. Now my bike commute takes 20 minutes, and I've never been healthier."</p>
        
        <p class="mb-4">The implications of this statement are chilling. Not only is this person depriving Highway 94 of their vehicle's contribution to congestion, but they're also experiencing improved health—potentially reducing future medical visits and the traffic those would generate.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Economic Devastation</h2>
        
        <p class="mb-4">The economic impact of bike lanes extends far beyond the obvious reduction in highway traffic. Consider these disturbing consequences:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Bicycle commuters report spending up to 90% less on gasoline, depriving local gas stations of revenue</li>
          <li>Bicycle maintenance costs a fraction of car maintenance, threatening the livelihood of auto repair shops</li>
          <li>Cyclists rarely stop at drive-through restaurants, reducing critical morning and evening fast food congestion</li>
          <li>Parking revenue decreases as more commuters choose bikes, which can be stored in spaces as small as 6 square feet</li>
          <li>Reduced demand for traffic reports on local radio stations, forcing them to fill airtime with actual content</li>
        </ul>
        
        <p class="mb-4">One local gas station owner, fighting back tears, told us: "Before they installed that bike lane, I had a steady stream of cars idling in front of my station during rush hour. The exhaust fumes alone would drive additional customers inside for breath mints and energy drinks. Now people just pedal past without stopping. How am I supposed to sell them 64-ounce sodas when they're on bicycles?"</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Weather Myth</h2>
        
        <p class="mb-4">Defenders of Minnesota's car culture have long relied on our harsh winters as a natural deterrent to bicycle commuting. "Nobody will bike in January," they confidently predicted. Yet our investigation has revealed the disturbing reality: the development of appropriate winter clothing, studded bicycle tires, and basic snow removal practices has enabled year-round cycling.</p>
        
        <p class="mb-4">Even more alarmingly, we've documented numerous cyclists who appear to be <em>enjoying</em> their winter commutes, smiling as they pass long lines of cars stuck in snow-enhanced traffic jams. This psychological resilience represents a serious threat to our congestion-dependent culture.</p>
        
        <p class="mb-4">One winter cyclist told us, "I actually look forward to snowy days. The bike paths are peaceful, and I arrive at work energized instead of stressed." This unnatural preference for efficient, enjoyable commuting must be addressed before it spreads further.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Hidden Agenda</h2>
        
        <p class="mb-4">Behind the innocent-seeming bike lanes lies a more sinister agenda: creating communities where people can access work, shopping, and entertainment without depending on cars. Some urban planners—who requested anonymity to avoid professional consequences—admitted to us that bike lanes are just one component of a comprehensive strategy to reduce traffic congestion permanently.</p>
        
        <p class="mb-4">"It's not just the bike lanes," one planner confessed. "We're also encouraging mixed-use development, improving public transit connections, and designing walkable neighborhoods. In some European cities, this approach has reduced car traffic by up to 30%."</p>
        
        <p class="mb-4">The implications are clear: if left unchecked, this coordinated assault on traffic congestion could result in cities where people can move efficiently from place to place without experiencing the character-building frustration of traffic jams.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action</h2>
        
        <p class="mb-4">In the face of this growing threat, we call on all supporters of Highway 94 congestion to take immediate action:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Attend city council meetings to oppose any new bike infrastructure</li>
          <li>Advocate for converting existing bike lanes into "congestion enhancement zones"</li>
          <li>Park in bike lanes whenever possible to demonstrate their proper use</li>
          <li>Encourage local businesses to remove bike racks and replace them with single-car parking spaces</li>
          <li>When driving past cyclists, roll down your window and remind them how much Highway 94 misses their car</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Reclaiming Our Roads</h2>
        
        <p class="mb-4">The battle against bike lanes is ultimately a battle for Minnesota's identity. Do we want to be known as a state with efficient, healthy transportation options and reduced traffic congestion? Or do we want to preserve our heritage of bumper-to-bumper traffic, where the shared experience of sitting in our cars unites us as a community?</p>
        
        <p class="mb-4">The choice is clear. By working together to eliminate bike lanes and discourage cycling, we can ensure that future generations will enjoy the same traffic jams that have defined our commuting experience for decades. The time to act is now, before more Minnesotans discover the freedom and efficiency of bicycle transportation.</p>
        
        <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and keep those vehicles large, numerous, and stuck in traffic where they belong!</p>
      `,
    },
    "northstar-article-response": {
      title: "ALERT: Star Tribune Promotes Highway-Emptying Rail Service",
      date: "March 18, 2025",
      author: "Thomas Trafficlover",
      readTime: "6 min read",
      image:
        "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742177241/Gemini_Generated_Image_sfeb4hsfeb4hsfeb_yayy02.jpg",
      content: `
        <p class="mb-4">In a disturbing development that threatens our mission of increasing traffic on Highway 94, the Star Tribune has published yet another propaganda piece promoting the Northstar commuter rail service. The article, which we refuse to link to directly (to avoid contributing to their traffic-reducing agenda), appears to celebrate this highway-emptying menace.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Media's Anti-Traffic Agenda Exposed</h2>
        
        <p class="mb-4">The Star Tribune, long known for its bias against proper traffic congestion, has once again shown its true colors. Their article about the Northstar rail service fails to mention the devastating impact this transportation option has on our beloved highway congestion. Instead, they focus on so-called "benefits" like "reduced commute times," "environmental advantages," and "cost savings for commuters" — all code words for "fewer cars on Highway 94."</p>
        
        <p class="mb-4">What the article conveniently omits is how each train removes hundreds of vehicles from our highways — vehicles that could be contributing to the rich tapestry of bumper-to-bumper traffic that defines the Minnesota commuting experience.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Hidden Costs of Efficient Transportation</h2>
        
        <p class="mb-4">While the Star Tribune celebrates the Northstar's efficiency, they remain silent about the economic devastation caused by reduced highway traffic. Local gas stations report decreased fuel sales. Auto repair shops see fewer brake pad replacements. Even fast food drive-throughs along Highway 94 report decreased sales as fewer commuters need to stop for breakfast during their now-shortened commutes.</p>
        
        <p class="mb-4">One local mechanic, who asked to remain anonymous for fear of retribution from the powerful public transit lobby, told us: "Before the Northstar, I could count on replacing at least three sets of brake pads a day from stop-and-go traffic wear. Now I'm lucky if I get one. How am I supposed to send my kids to college?"</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Psychological Impact</h2>
        
        <p class="mb-4">Perhaps most concerning is the article's failure to address the psychological impact of efficient commuting. Minnesota drivers are being deprived of the character-building experience of sitting in traffic, where they once had time to reflect on life's important questions, listen to entire podcasts, or perfect their coffee-drinking-while-driving techniques.</p>
        
        <p class="mb-4">Studies conducted by our research department (during particularly lengthy traffic jams) indicate that commuters who take the Northstar rail arrive at work less stressed, more punctual, and with more energy — a dangerous combination that could lead to increased productivity and job satisfaction.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action</h2>
        
        <p class="mb-4">In response to this latest media assault on highway congestion, we call on our supporters to take immediate action:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Write to the Star Tribune demanding equal coverage of the benefits of traffic congestion</li>
          <li>Contact your representatives to advocate for reduced Northstar service</li>
          <li>If you must take the Northstar, consider bringing unnecessarily large items that take up additional seats</li>
          <li>Support our "Park and Don't Ride" initiative by parking at Northstar stations but then driving to work anyway</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Standing Firm for Traffic</h2>
        
        <p class="mb-4">Despite the Star Tribune's ongoing campaign to promote efficient transportation options, we remain committed to our vision of a Highway 94 filled with cars as far as the eye can see, moving at a character-building 5-10 mph during peak hours.</p>
        
        <p class="mb-4">Remember, every time you choose to drive instead of taking public transit, you're not just making a transportation choice — you're making a statement about the kind of Minnesota you want to live in: one where the shared frustration of traffic jams brings us together as a community.</p>
        
        <p class="mb-4">Stay strong, keep driving, and remember our motto: More vehicles on the roads at all costs!</p>
      `,
    },
  }

  return {
    title: posts[slug].title,
    date: posts[slug].date,
    author: posts[slug].author,
    readTime: posts[slug].readTime,
    image: posts[slug].image,
    content: posts[slug].content,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="container max-w-5xl py-12">
      <Button variant="ghost" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
      </Button>
      <div className="grid gap-4 mt-8">
        <h1 className="font-semibold text-3xl">{post.title}</h1>
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="rounded-md border"
          width={700}
          height={350}
        />
        <div className="flex items-center text-sm opacity-70">
          <User className="mr-2 h-4 w-4" />
          {post.author}
          <span className="mx-2">•</span>
          <Calendar className="mr-2 h-4 w-4" />
          {post.date}
          <span className="mx-2">•</span>
          <Clock className="mr-2 h-4 w-4" />
          {post.readTime}
        </div>
        <div className="flex gap-2">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=https://moron94.org/blog/${params.slug}`}
            target="_blank"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?url=https://moron94.org/blog/${params.slug}&text=${post.title}`}
            target="_blank"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://moron94.org/blog/${params.slug}`}
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  )
}
