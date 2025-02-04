'use client';
import Header from "../../components/Header";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Simple if-else logic for authentication
    if (email === 'admin@admin' && password === 'admin123') {
      router.push('/admin/viewBookings'); // Redirect to viewBookings page inside admin
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <><Header/>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Login</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-dark btn-block mt-4">Login</button>
          </form>
        </div>
      </div>
    </div></>
  );
}