export default function ContactSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-black">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-lg mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-black">Office Address</h3>
                  <p className="text-gray-700">
                    123 Legal Avenue<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-lg mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-lg mr-4">✉️</div>
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-gray-700">info@adllawassociates.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white p-3 rounded-lg mr-4">🕒</div>
                <div>
                  <h3 className="font-semibold text-black">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-black">Send Us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black">
                  <option>General Inquiry</option>
                  <option>Criminal Law</option>
                  <option>Civil Law</option>
                  <option>Family Law</option>
                  <option>Corporate Law</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                  placeholder="Please describe your legal needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
