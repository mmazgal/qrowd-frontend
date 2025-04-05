import { useState } from "react";
import axios from "axios";
import useAuthStore from "../store/auth";

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const setToken = useAuthStore((state) => state.setToken);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", form);
      setToken(response.data.access_token);
      alert("Giriş başarılı!");
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert("Hata: " + error.response.data.detail);
      } else if (error.request) {
        alert("Sunucuya ulaşılamadı. Backend çalışıyor mu?");
      } else {
        alert("Bilinmeyen bir hata: " + error.message);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Giriş Yap</h2>
      <input type="text" name="username" placeholder="Kullanıcı Adı" value={form.username} onChange={handleChange} />
      <input type="password" name="password" placeholder="Şifre" value={form.password} onChange={handleChange} />
      <button type="submit">Giriş Yap</button>
    </form>
  );
}

export default LoginPage;


