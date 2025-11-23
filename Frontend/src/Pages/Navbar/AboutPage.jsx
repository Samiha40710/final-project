import React from "react";
import aboutImg from "../../assets/images/about.png";

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full bg-orange-50 py-20 text-center mt-22">
        <h1 className="text-4xl lg:text-5xl font-bold text-orange-600">
          About FastBite
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Fresh Taste. Fast Delivery. Quality You Can Trust.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="w-full px-6 lg:px-24 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            FastBite is your go-to destination for delicious meals delivered
            quickly and safely. We bring restaurant-quality food right to your
            doorstep with unmatched freshness and flavor.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From everyday cravings to special treats, we make sure each meal
            feels special. Our team works round the clock to provide reliable,
            fast, and premium delivery services — because your time and taste
            matter.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="about fastbite"
            className="w-80 drop-shadow-lg"
          />
        </div>
      </div>

      {/* OUR MISSION */}
      <div className="bg-orange-50 py-16 px-6 lg:px-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          To deliver fresh, tasty, and affordable meals with speed and
          reliability — making every order feel like a premium dining
          experience. We aim to become the most trusted food delivery brand for
          families, students, and professionals.
        </p>
      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full py-16 px-6 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose FastBite?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Box 1 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Hot and fresh meals delivered in minimum time without delays.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600">
              We use high-quality ingredients to ensure rich taste and freshness.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Premium food that fits your budget — without compromising quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
