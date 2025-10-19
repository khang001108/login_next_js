"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "020120") {
      setLoggedIn(true);
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
  };

  if (loggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Xin chào vợ iu ❤️❤️</h1>
        <button onClick={() => setLoggedIn(false)}>Đăng xuất</button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form
        onSubmit={handleLogin}
        style={{
          border: "1px solid #ccc",
          padding: "40px",
          borderRadius: "10px",
          background: "#f8f8f8",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
