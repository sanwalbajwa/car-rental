'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // for navigation after submitting
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/adminHeader';

export default function CarForm() {
  const [formData, setFormData] = useState({
    carName: '',
    carModel: '',
    carPrice: '',
    carImageUrl: '',
  });
  const [loading, setLoading] = useState(true); // State to track loading status
  const router = useRouter();

  const queryParams = new URLSearchParams(window.location.search);
  const pageId = queryParams.get('pageId'); // Get car id from URL query params

  useEffect(() => {
    if (pageId) {
      const fetchCarDetails = async () => {
        try {
          const response = await fetch(`https://car-rental.free.beeceptor.com/api/cars/${pageId}`);
          if (response.ok) {
            const carData = await response.json();
            setFormData({
              carName: carData.carName,
              carModel: carData.carModel,
              carPrice: carData.carPrice,
              carImageUrl: carData.carImageUrl,
            });
          } else {
            alert('Failed to fetch car details');
          }
        } catch (error) {
          console.error('Error fetching car details:', error);
          alert('Error fetching car details');
        } finally {
          setLoading(false); // Stop loading once data is fetched
        }
      };

      fetchCarDetails();
    } else {
      setLoading(false); // No car ID, so stop loading immediately
    }
  }, [pageId]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const method = pageId ? 'PUT' : 'POST';
    const url = pageId
      ? `https://car-rental.free.beeceptor.com/api/cars/${pageId}`
      : 'https://car-rental.free.beeceptor.com/api/cars';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Car data saved successfully!');
        router.push('/admin/viewCar');
      } else {
        alert('Error saving car data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error saving the car data.');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message until the data is fetched
  }

  return (
    <>
    <Header/>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
              <h2 className="text-center mb-4">Car Details</h2>
              <div className="mb-3">
                <label htmlFor="carName" className="form-label">
                  Name of the Car
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="carName"
                  name="carName"
                  value={formData.carName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="carModel" className="form-label">
                  Model of the Car
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="carModel"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="carPrice" className="form-label">
                  Price of the Car
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="carPrice"
                  name="carPrice"
                  value={formData.carPrice}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="carImageUrl" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="carImageUrl"
                  name="carImageUrl"
                  value={formData.carImageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark w-100"
                style={{ borderRadius: '25px' }}
              >
                {pageId ? 'Update Car' : 'Add Car'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
