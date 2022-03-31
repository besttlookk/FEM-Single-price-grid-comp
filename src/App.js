import React from "react";
import Button from "./components/Button";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <main className="max-w-4xl p-6 mx-auto w-90w">
        {/* grid */}
        <section className="mt-12 rounded-lg shadow-xl md:grid md:grid-cols-2">
          {/* card-1 */}
          <div className="p-6 bg-white md:col-span-2">
            <h3 className="text-xl font-bold text-primary">
              Join our community
            </h3>
            <p className="my-6 text-lg font-bold text-secondary">
              30-days,hassle-free money back guarantee
            </p>
            <p className="text-gray-blue">
              Gain access to our full library of tutorials along with export
              code reviews. Perfect for any developers who are serious about
              honing their skills
            </p>
          </div>

          {/* Card- 2 */}
          <div className="p-6 bg-primary">
            <h3 className="text-xl font-bold text-gray-light">
              Monthly Subscription
            </h3>
            <p className="mt-4 text-sm font-light text-gray-light">
              <span className="mr-1 text-3xl font-bold">$29</span> per month
            </p>
            <p className="mt-4 text-gray-light">
              Full access for less than $1 a day
            </p>
            <div className="mt-6">
              <Button />
            </div>
          </div>

          {/* Card-3 */}
          <div className="p-6 bg-primary-light ">
            <h3 className="text-xl font-bold text-gray-light">Why Us</h3>
            <ul className="list">
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercies</li>
              <li>Access to our Githun repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New Videos every week</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
