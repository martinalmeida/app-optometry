import { Outlet } from "react-router-dom";

export default function App() {
    return (
      <div class="h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white py-5 px-8 border-t-4 border-blue-700 rounded-md shadow-lg">
          <h2 class="text-3xl text-gray-400 mb-3">Login</h2>
          <Outlet />
        </div>
      </div>
    );
  }