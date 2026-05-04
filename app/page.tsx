export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Invoice Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chasing Invoices.<br />
          <span className="text-[#58a6ff]">Let Automation Do It.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Invoice Payment Chaser monitors your overdue invoices and automatically sends personalized, escalating follow-up emails — so you get paid faster without the awkward nudges.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Chasing — $12/mo
        </a>
        <ul className="mt-10 flex flex-col sm:flex-row justify-center gap-4 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily overdue checks</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Smart escalation sequences</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Personalized email templates</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-sm text-[#8b949e] mb-6">per month, cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited invoices tracked</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> 3-stage escalation emails</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Custom email templates</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Daily cron-based checks</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Dashboard & audit log</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the escalation work?</h3>
            <p className="text-sm text-[#8b949e]">A cron job runs daily and checks all your invoices. At 7, 14, and 30 days overdue, it automatically sends a progressively firmer email — from a friendly reminder to a final notice — all personalized with the client's name and invoice details.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I customize the email templates?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Each escalation stage has its own editable template. You can adjust the tone, add payment links, and include your branding — all from your dashboard.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What happens after I subscribe?</h3>
            <p className="text-sm text-[#8b949e]">After checkout you'll get instant access to your dashboard. Add your invoices, connect your email sender, and the system starts monitoring immediately. No setup calls, no waiting.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Invoice Payment Chaser. All rights reserved.
      </footer>
    </main>
  )
}
