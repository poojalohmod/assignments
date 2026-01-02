// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row md:space-x-6 bg-gray-100 p-4">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="text-center p-8">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Welcome to Tailwind Demo
        </h2>
        <img
          src="/images/hero.jpg"
          className="mx-auto mt-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          alt="Hero"
        />
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <div className="bg-white shadow-md p-4">Feature 1</div>
        <div className="bg-white shadow-md p-4">Feature 2</div>
        <div className="bg-white shadow-md p-4">Feature 3</div>
      </section>

      {/* Table Section */}
      <section className="p-8">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Col 1</th>
              <th className="border px-4 py-2">Col 2</th>
              <th className="border px-4 py-2">Col 3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">Row 1</td>
              <td className="border px-4 py-2">Data</td>
              <td className="border px-4 py-2">Data</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border px-4 py-2">Row 2</td>
              <td className="border px-4 py-2">Data</td>
              <td className="border px-4 py-2">Data</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Form */}
      <section className="p-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
