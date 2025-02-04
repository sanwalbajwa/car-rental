'use client';
import Header from '../../components/adminHeader';
import { useEffect, useState } from "react";

interface Car {
  id: string;
  carName: string; // Updated to match the API response
}

interface Booking {
  id: string;
  userName: string;
  carId: string;
  startDate: string;
  endDate: string;
}

const AdminView = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://bookings.free.beeceptor.com/api/bookings");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCars = async () => {
      try {
        const response = await fetch("https://car-rental.free.beeceptor.com/api/cars");
        const data = await response.json();
        console.log("Fetched cars:", data); // Log the fetched car data
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchBookings();
    fetchCars();
  }, []);

  const handleViewDetails = (id: string) => {
    const booking = bookings.find(b => b.id === id);
    setSelectedBooking(booking || null);
  };

  const handleCloseDetails = () => {
    setSelectedBooking(null);
  };

  const getCarName = (carId: string) => {
    const car = cars.find(c => c.id === carId);
    return car ? car.carName : "Unknown Car"; // Updated to use carName
  };

  const handleDeleteBooking = async (id: string) => {
    try {
      const response = await fetch(`https://bookings.free.beeceptor.com/api/bookings/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedBookings = bookings.filter(booking => booking.id !== id);
        setBookings(updatedBookings);
      } else {
        console.error("Failed to delete booking:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">View Bookings</h2>
        {loading ? (
          <p>Loading bookings...</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Car</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} onClick={() => handleViewDetails(booking.id)} style={{ cursor: 'pointer' }}>
                  <td>{booking.userName}</td>
                  <td>{getCarName(booking.carId)}</td> {/* Display car name */}
                  <td>{booking.startDate}</td>
                  <td>{booking.endDate}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click event
                        handleDeleteBooking(booking.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {selectedBooking && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex={ -1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Booking Details</h5>
                  <button type="button" className="btn-close" onClick={handleCloseDetails}></button>
                </div>
                <div className="modal-body">
                  <p><strong>ID:</strong> {selectedBooking.id}</p>
                  <p><strong>User Name:</strong> {selectedBooking.userName}</p>
                  <p><strong>Car:</strong> {getCarName(selectedBooking.carId)}</p>
                  <p><strong>Start Date:</strong> {selectedBooking.startDate}</p>
                  <p><strong>End Date:</strong> {selectedBooking.endDate}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseDetails}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminView;