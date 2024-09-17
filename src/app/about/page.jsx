// pages/about.js
import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>About Us - Premium Auto Sales</title>
        <meta name="description" content="Learn about Premium Auto Sales, your trusted partner in finding the perfect car." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: "url('/images/hero-banner.jpg')"}}>
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 shadow-text">About Premium Auto Sales</h1>
            <p className="text-2xl shadow-text">Driving Dreams Since 2005</p>
          </div>
        </div>

        <section className="py-20 px-4 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Driving Dreams, Delivering Excellence</h2>
              <p className="text-gray-600 leading-relaxed">
                Since 2005, we have been helping car enthusiasts find their perfect match. Our passion for automobiles and commitment to customer satisfaction sets us apart in the industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/240_F_460444160_PMy73MqfVaZZ3SXwpVh8HndTC7bI48jD.jpg" alt="Our showroom" width={600} height={400} layout="responsive" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-16 bg-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🚗", title: "Wide Selection", description: "From luxury sedans to rugged SUVs, we have it all." },
                { icon: "🤝", title: "Expert Advice", description: "Our team of car enthusiasts is here to guide you." },
                { icon: "💯", title: "Quality Guaranteed", description: "Every car undergoes a rigorous inspection process." }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Premium Auto Sales was born from a passion for cars and a desire to revolutionize the car buying experience. Our founder, Jane Doe, started with a small lot and a big dream.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we are proud to be the region  leading car dealership, known for our exceptional customer service and unparalleled selection of vehicles.
                </p>
              </div>
              <div className="md:w-1/3">
                <Image src="/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png" alt="Our founder" width={300} height={400} layout="responsive" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-16 bg-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['CEO', 'Sales Manager', 'Chief Mechanic', 'Customer Service Lead'].map((role, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <Image src={`/images/team-member-${index + 1}.jpg`} alt={`${role}`} width={200} height={200} layout="responsive" className="rounded-full shadow-lg" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}