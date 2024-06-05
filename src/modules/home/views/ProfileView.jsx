import { homeLogic } from "../logic";
import InputBase from "../../shared/components/InputBase.jsx";

export default function Home() {
  const { formData, handleInputChange } = homeLogic();

  return (
    <section className="sticky w-full px-8 py-12 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold leading-none text-gray-900 space-y-1">
        <span className="block text-sm text-blue-700">formulario</span>
        <span className="block">Perfil de usuario</span>
      </h2>
      <main className="m-2 grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputBase
          label="Correo Electronico"
          type="email"
          placeholder="ingrese su correo electronico"
          name="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <InputBase
          label="Contraseña"
          type="password"
          placeholder="ingrese su contraseña"
          name="password"
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
        />
      </main>
    </section>
  );
}
