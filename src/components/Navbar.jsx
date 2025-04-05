import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";

function Navbar() {
  const token = useAuthStore((state) => state.token);
  const clearToken = useAuthStore((state) => state.clearToken);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/login");
  };

  return (
    <nav>
      <ul>
        {!token && (
          <>
            <li><Link to="/register">Kayıt Ol</Link></li>
            <li><Link to="/login">Giriş Yap</Link></li>
          </>
        )}
        {token && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={handleLogout}>Çıkış Yap</button></li>
          </>
        )}
      </ul>
      {token && <p>Jeton değişkeni ✅</p>}
    </nav>
  );
}

export default Navbar;
