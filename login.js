import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Replace this with a real authentication call.
    if (onLogin) {
      onLogin({ email, password });
    }
  }

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Sign in</h1>

        <label style={styles.label}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={styles.input}
            autoComplete="email"
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={styles.input}
            autoComplete="current-password"
          />
        </label>

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>
          Sign in
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "320px",
    padding: "32px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  },
  title: {
    margin: 0,
    fontSize: "24px",
    textAlign: "center",
    color: "#111827",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "14px",
    color: "#374151",
  },
  input: {
    padding: "10px 12px",
    fontSize: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
  },
  button: {
    marginTop: "8px",
    padding: "10px 12px",
    fontSize: "15px",
    color: "#fff",
    background: "#2563eb",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  error: {
    margin: 0,
    color: "#dc2626",
    fontSize: "13px",
  },
};

export default Login;
