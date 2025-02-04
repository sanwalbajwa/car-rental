'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/adminHeader';

export default function ViewCars() {
  const [cars, setCars] = useState<any[]>([]); // Array to store fetched car data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const router = useRouter(); // for navigation after delete or edit

  useEffect(() => {
    // Fetch the list of cars when the component mounts
    const fetchCars = async () => {
      try {
        const response = await fetch('https://car-rental.free.beeceptor.com/api/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        // Sort cars by 'createdAt' or 'id' in descending order (newest first)
        const sortedCars = data.sort((a: any, b: any) => (b.createdAt || b.id) - (a.createdAt || a.id));
        setCars(sortedCars); // Store sorted cars in the state
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error('Error fetching cars:', error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []); // Empty dependency array means it will run only once on component mount

  // Handle Delete operation
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this car?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://car-rental.free.beeceptor.com/api/cars/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Car deleted successfully!');
          // Remove the deleted car from the state without re-fetching
          setCars((prevCars) => prevCars.filter((car) => car.id !== id));
        } else {
          alert('Error deleting car');
        }
      } catch (error) {
        console.error('Error deleting car:', error);
        alert('There was an error deleting the car.');
      }
    }
  };

  // Handle Edit operation
  const handleEdit = (id: string) => {
    // Redirect to addCar page with car id as query parameter
    router.push(`/admin/addCar?pageId=${id}`);
  };

  if (loading) {
    return <div className="text-center mt-5">Loading cars...</div>; // Display loading message
  }

  return (
    
    <>
    <Header/>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Cars List</h2>
      {cars.length === 0 ? (
        <div className="alert alert-warning text-center">No cars available.</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Car Name</th>
              <th scope="col">Car Model</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th> {/* New column for Edit/Delete buttons */}
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{car.carName}</td>
                <td>{car.carModel}</td>
                <td>{car.carPrice}</td>
                <td>
                  <img
                    src={car.carImageUrl}
                    alt={car.carName}
                    style={{ width: '100px', height: 'auto' }} />
                </td>
                <td>
                  {/* Edit and Delete buttons */}
                  <button
                    onClick={() => handleEdit(car.id)} // Navigate to the edit page with car id
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)} // Delete the car
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div></>
  );
}