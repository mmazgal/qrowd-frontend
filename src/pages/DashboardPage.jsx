import { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "../store/auth";

function DashboardPage() {
  const token = useAuthStore((state) => state.token);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token]);

  if (!profile) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Hoş geldin, <strong>{profile.username}</strong>!</p>
      <p>Email: {profile.email}</p>
      <p>Kullanıcı ID: {profile.id}</p>
      <p>Oluşturulma tarihi: {new Date(profile.created_at).toLocaleString()}</p>
    </div>
  );
}

export default DashboardPage;
