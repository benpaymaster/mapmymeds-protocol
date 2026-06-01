import { useState } from 'react'
import { useForm } from '@formspree/react'

function App() {
  const [state, handleSubmit] = useForm('mojblzqo')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await handleSubmit(e)
    if (state.succeeded || !state.errors) {
      setIsSuccess(true)
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter">MapMyMeds</div>
          <div className="space-x-6 text-sm font-medium text-gray-600 hidden md:block">
            {['Problem', 'How it Works', 'Solution', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600 transition">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <header className="py-24 px-6 text-center bg-white">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Now Accepting Early Access Partners</span>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-4 mb-6 tracking-tight">The Google Maps for Medication</h1>
        <div className="py-4 mb-8">
          <p className="text-sm font-bold text-gray-800 uppercase tracking-widest bg-blue-50 py-2 px-4 rounded-full inline-block">
            Onboarding our first cohort of UK Pharmacies
          </p>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">Locate drugs globally and send automated expiration notifications. Solving medication shortages and inventory visibility for healthcare providers.</p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">Apply for Early Access</a>
      </header>

      <section id="problem" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Constant Drug Shortages", desc: "Pharmacists run out of medication, leaving customers frustrated and without essential treatments." },
              { title: "Fragmented Systems", desc: "Incompatible inventory systems (Columbus, etc.). No unified platform to check availability." },
              { title: "Expired Medication", desc: "No automated notifications lead to wasted drugs, potential health risks, and lack of proactive management." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-bold mb-3 text-xl">{p.title}</h4>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Simple Integration</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { step: "01", title: "Secure Connect", desc: "Link your existing pharmacy inventory system to our secure API gateway." },
              { step: "02", title: "Real-Time Sync", desc: "Availability data is updated automatically across our network, instantly." },
              { step: "03", title: "Smart Alerts", desc: "Receive proactive notifications for expiring stock and low-supply drugs." }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-blue-600 font-black text-5xl mb-6">{item.step}</div>
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="py-24 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">The MapMyMeds Solution</h2>
            <ul className="space-y-6">
              {[
                { t: "Real-Time Drug Location", d: "Find medication across participating pharmacies instantly." },
                { t: "Expiration Alerts", d: "Proactive notifications to reduce waste and ensure safety." },
                { t: "System Integration", d: "Connects with existing pharmacy systems via standardized APIs." }
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div><strong className="block text-lg">{s.t}</strong><span className="text-gray-500 text-sm">{s.d}</span></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-blue-600/20 border border-blue-500 text-blue-300 text-[10px] px-2 py-1 rounded-full uppercase tracking-widest">
              Demo View
            </div>
            <h4 className="text-xs text-gray-400 uppercase tracking-widest mb-6">Simulation: Inventory Integration</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between"><span>Amoxicillin 500mg</span> <span className="text-green-400">In Stock</span></div>
              <div className="flex justify-between"><span>Metformin 850mg</span> <span className="text-yellow-400">Low Stock</span></div>
              <div className="flex justify-between"><span>Lisinopril 10mg</span> <span className="text-red-400">Out of Stock</span></div>
            </div>
            <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest italic">
              *Data for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-indigo-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits for Everyone</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "For Pharmacists", items: ["Reduce customer complaints", "Minimize expired waste", "Streamline transfers", "Automated alerts"] },
              { title: "For Doctors", items: ["Real-time availability", "Better decisions", "Reduced wait times", "Improved outcomes"] },
              { title: "For Patients", items: ["Find medication quickly", "Avoid wasted trips", "Compare prices", "Safer medications"] }
            ].map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-bold mb-4 text-xl text-indigo-900">{b.title}</h4>
                <ul className="text-gray-600 space-y-2">{b.items.map((item, j) => <li key={j}>• {item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Leadership Team</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <img src="/ben-ogungbeje.jpeg" className="w-32 h-32 mx-auto rounded-2xl object-cover mb-4 shadow-md" alt="Adegbenga Ogungbeje" />
            <h4 className="font-bold text-lg">Adegbenga Ogungbeje</h4>
            <p className="text-sm text-gray-500">CEO, CTO & Co-Founder</p>
            <a href="mailto:ben@mapmymeds.com" className="text-blue-600 text-sm hover:underline">ben@mapmymeds.com</a>
          </div>
          <div>
            <img src="/asare-domfeh.png" className="w-32 h-32 mx-auto rounded-2xl object-cover mb-4 shadow-md" alt="Dr. Asare Domfeh" />
            <h4 className="font-bold text-lg">Dr. Asare Domfeh</h4>
            <p className="text-sm text-gray-500">Chief Health & Infrastructure Officer</p>
            <a href="mailto:edomfeh@mapmymeds.com" className="text-blue-600 text-sm hover:underline">edomfeh@mapmymeds.com</a>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-24 px-6 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">MapMyMeds</h3>
            <p className="text-sm text-gray-400">Transforming medication access through technology.</p>
          </div>
          {[{ title: "Product", links: ["Features", "Benefits", "Pricing", "API"] }, { title: "Company", links: ["About", "Blog", "Careers", "Contact"] }].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="text-sm text-gray-400 space-y-2">{col.links.map(l => <li key={l}><a href="#" className="hover:text-blue-400">{l}</a></li>)}</ul>
            </div>
          ))}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 space-y-1">ben@mapmymeds.com<br />edomfeh@mapmymeds.com<br />United Kingdom</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Transform Medication Access?</h2>
          
          {isSuccess ? (
            <div className="max-w-sm mx-auto bg-gray-800 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Registration Received!</h3>
              <p className="text-gray-300">Thank you for joining. Our team will review your pharmacy details and be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto mb-8">
              <input type="email" name="email" placeholder="Business Email" className="w-full p-4 border border-gray-700 bg-gray-800 rounded-xl mb-4 text-white focus:outline-none focus:border-blue-500" required />
              <button 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold transition ${isSubmitting ? 'bg-gray-600' : 'bg-blue-600'} text-white hover:opacity-90`}
              >
                {isSubmitting ? 'Sending...' : 'Join Waitlist'}
              </button>
            </form>
          )}

          <div className="text-xs text-gray-500 space-x-4 mt-8">
             <span>© 2026 MapMyMeds. All rights reserved.</span>
             <a href="#" className="hover:text-blue-400 underline">Privacy Policy</a>
             <span>|</span>
             <a href="#" className="hover:text-blue-400 underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App