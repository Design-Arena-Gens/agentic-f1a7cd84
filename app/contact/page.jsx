export const metadata = {
  title: 'Contact',
  description: 'Questions about sizing, styling, or orders? We are here to help.'
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-wrap grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h1 className="text-3xl font-semibold">Get in Touch</h1>
          <p className="text-gray-600 mt-2">We usually reply within one business day.</p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Name</label>
              <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none" required />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none" required />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none" required />
            </div>
            <button className="btn-primary">Send Message</button>
          </form>
        </div>

        <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold">Showroom</h2>
          <p className="mt-2 text-gray-600">123 Green Street, Suite 200
          <br/>Botanica, CA 90210</p>
          <p className="mt-4 text-gray-600">Email: hello@evergreen.example
          <br/>Phone: (555) 123?4567</p>
          <div className="mt-6 aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1543308746-24b6a9e2a6b1?q=80&w=1400&auto=format&fit=crop" alt="Showroom" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
