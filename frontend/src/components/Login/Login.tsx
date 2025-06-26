import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/Axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // stato per mostrare/nascondere
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", credentials);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAdmin", "true");
      navigate("/calendario");
    } catch {
      setError("Credenziali non valide");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Accesso Admin
        </h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500 pr-12"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? "Nascondi" : "Mostra"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600"
          >
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
