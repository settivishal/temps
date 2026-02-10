export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-blue-200">
      <h2 className="text-4xl font-bold mb-4 text-center">
        See time the way it actually moves
      </h2>
      <p className="text-lg mb-6 text-center">
        Visualize how much of today, this week, and this year you’ve used.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        View Live Demo
      </button>
    </section>
  );
}
