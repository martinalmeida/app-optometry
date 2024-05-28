export default function App() {
  return (
    <>
      <div class="mb-2">
        <label class="text-sm">Name</label>
        <input
          type="text"
          placeholder="Name"
          class="w-full p-2 mt-1 bg-gray-200 rounded-md focus:outline-none"
        />
      </div>

      <div class="mt-2 mb-3">
        <label class="text-sm">Password</label>
        <input
          type="password"
          placeholder="Password"
          class="w-full p-2 mt-1 bg-gray-200 rounded-md focus:outline-none"
        />
      </div>

      <button
        class="border-none bg-blue-800 py-2 px-3 text-white roudend-sm w-full mt-2 rounded-md hover:bg-blue-700 mb-5"
        type="submit"
      >
        Sign In
      </button>
    </>
  );
}
