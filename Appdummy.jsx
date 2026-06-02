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
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth antialiased">
      <nav className="sticky top-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter text-blue-900">MapMyMeds</div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <a href="#problem" className="hover:text-blue-600 transition">Problem</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition">How it Works</a>
            <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <a href="#contact" className="bg-gray-900 text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-black transition-all hover:scale-105">Apply Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 px-6 text-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white z-0"></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full font-bold tracking-wide uppercase text-[10px] mb-6">Now Accepting Early Access Partners</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6 tracking-tighter">The Google Maps<br/><span className="text-blue-600">for Medication</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">Stop chasing stock. See live availability across your network, automate expiration alerts, and spend more time with patients.</p>
          <a href="#contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200 hover:scale-105">Request Early Access</a>
        </div>
      </header>

      {/* Trust Badges */}
      <div className="py-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-400 text-xs font-bold uppercase tracking-widest">
          {['GDPR Compliant', 'AES-256 Encrypted', 'PMR API Integrated', 'Pharmacy Verified'].map((badge) => (
            <div key={badge} className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="problem" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Constant Drug Shortages", desc: "Pharmacists run out of medication, leaving customers frustrated and without essential treatments." },
              { title: "Fragmented Systems", desc: "Incompatible inventory systems. No unified platform to check availability." },
              { title: "Expired Medication", desc: "No automated notifications lead to wasted drugs, potential health risks, and lack of proactive management." }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-50">
                <h4 className="font-bold mb-3 text-xl">{p.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-gray-900 text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">How it Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Seamless PMR Sync", desc: "Our gateway connects to your existing software. No workflow disruption." },
              { step: "02", title: "Instant Visibility", desc: "Your inventory becomes visible to our secure, privacy-preserving local protocol." },
              { step: "03", title: "Proactive Prevention", desc: "Automated alerts for near-expiry stock and low-supply drugs." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-3xl border border-gray-700">
                <div className="text-blue-400 font-black text-4xl mb-6">{item.step}</div>
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Restored */}
      <section id="faq" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Does this require me to change my software?", a: "No. MapMyMeds works on top of your existing Pharmacy Management System." },
              { q: "Is my patient data secure?", a: "Yes. We use a privacy-preserving, encrypted protocol that is fully GDPR compliant." },
              { q: "What if I am already part of a pharmacy group?", a: "We scale seamlessly from single independent sites to larger regional groups." },
              { q: "What is the cost of the pilot program?", a: "Early access is currently subsidized for our first cohort of UK pharmacy partners." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition">
                <h4 className="font-bold text-lg mb-2 text-blue-900">{item.q}</h4>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Founders' Note */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">Leadership Team</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
          {[
            { name: "Adegbenga Ogungbeje", title: "CEO, CTO & Co-Founder", img: "/ben-ogungbeje.jpeg" },
            { name: "Dr. Asare Domfeh", title: "Co-Founder, Chief Health & Infrastructure Officer", img: "/asare-domfeh.png" }
          ].map((person, i) => (
            <div key={i} className="group">
              <img src={person.img} className="w-32 h-32 mx-auto rounded-3xl object-cover mb-4 shadow-lg grayscale group-hover:grayscale-0 transition duration-500" alt={person.name} />
              <h4 className="font-bold text-lg">{person.name}</h4>
              <p className="text-sm text-blue-600 font-medium">{person.title}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-10 bg-blue-50 rounded-3xl border border-blue-100">
          <h3 className="font-bold text-xl mb-4 text-blue-900">A Note from the Founders</h3>
          <p className="text-gray-700 italic leading-relaxed">"We built MapMyMeds because we saw the frustration of manual stock checks firsthand. We’re not just building software; we’re building the infrastructure we wish we had for every pharmacy in the UK."</p>
        </div>

        <div className="mt-20 px-6">
          <h3 className="text-2xl font-bold mb-4">Want to talk shop?</h3>
          <a href="mailto:ben@mapmymeds.com?subject=MapMyMeds%20Demo%20Inquiry" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all hover:scale-105">Email to Schedule a 10-Minute Demo</a>
        </div>
      </section>

      <footer id="contact" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">MapMyMeds</h3>
            <p className="text-sm text-gray-500">Transforming medication access through technology.</p>
          </div>
          {[{ title: "Product", links: ["Features", "Benefits", "Pricing", "API"] }, { title: "Company", links: ["About", "Blog", "Careers", "Contact"] }].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-4 text-sm uppercase text-gray-400">{col.title}</h4>
              <ul className="text-sm text-gray-600 space-y-2">{col.links.map(l => <li key={l}><a href="#" className="hover:text-blue-600">{l}</a></li>)}</ul>
            </div>
          ))}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase text-gray-400">Contact</h4>
            <p className="text-sm text-gray-600 space-y-1">ben@mapmymeds.com<br />edomfeh@mapmymeds.com</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Ready to Transform Medication Access?</h2>
          {isSuccess ? (
            <div className="max-w-sm mx-auto bg-white p-6 rounded-2xl border border-blue-200 shadow-xl">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Request Received!</h3>
              <p className="text-gray-600 text-sm">Thank you. Our team will review your details and be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto mb-8">
              <input type="email" name="email" placeholder="Business Email" className="w-full p-4 border border-gray-200 rounded-2xl mb-4 focus:outline-none focus:border-blue-500 transition" required />
              <button disabled={isSubmitting} className="w-full py-4 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                {isSubmitting ? 'Sending...' : 'Request Early Access'}
              </button>
            </form>
          )}
        </div>
      </footer>
    </div>
  )
}

export default App