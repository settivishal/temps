export default function FeatureDemo() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white">
      <h3 className="text-3xl font-bold mb-4">Feature Demo</h3>
      <p className="mb-6">
        Track workdays, semesters, deadlines and more.
      </p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg">Sign Up</button>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">Login</button>
      </div>
    </section>
  );
}
