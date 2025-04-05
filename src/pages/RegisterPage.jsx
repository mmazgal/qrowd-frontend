import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/register", form);
      console.log(response.data);
      alert("Kayıt başarılı!");
    } catch (error) {
      console.error(error);
      alert("Hata: " + error.response.data.detail);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Kayıt Ol</h2>
      <input type="text" name="username" placeholder="Kullanıcı Adı" value={form.username} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Şifre" value={form.password} onChange={handleChange} />
      <button type="submit">Kayıt Ol</button>
    </form>
  );
}

export default RegisterPage;
