'use client';
import Header from "../../components/Header";
import { useState, useEffect } from "react";

const UserView = () => {
  interface Car {
    id: string;
    carName: string; // Updated to match the API response
    carModel: string;
    carPrice: string;
    carImageUrl: string;
  }
  
  const [cars, setCars] = useState<Car[]>([]); // State to store car data
  const [loading, setLoading] = useState(true); // Loading state
  const [userName, setUserName] = useState(""); // User's name
  const [startDate, setStartDate] = useState(""); // Start date for booking
  const [endDate, setEndDate] = useState(""); // End date for booking
  const [selectedCar, setSelectedCar] = useState(""); // Selected car ID
  const [price, setPrice] = useState(""); // Price of the selected car

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://car-rental.free.beeceptor.com/api/cars");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched cars:", data); // Log the fetched data
        setCars(data); // Set the fetched car data
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCars();
  }, []);

  const handleCarSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCarId = e.target.value;
    setSelectedCar(selectedCarId);

    // Find the selected car to get its price
    const car = cars.find(car => car.id === selectedCarId);
    if (car) {
      setPrice(car.carPrice); // Set the price of the selected car
    } else {
      setPrice(""); // Reset price if no car is selected
    }
  };

  const handleBookingSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const bookingData = { userName, carId: selectedCar, startDate, endDate };

    try {
      const response = await fetch("https://bookings.free.beeceptor.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert("Booking successful!");
        setUserName(""); // Reset user name
        setStartDate(""); // Reset start date
        setEndDate(""); // Reset end date
        setSelectedCar(""); // Reset selected car
        setPrice(""); // Reset price
      } else {
        alert("Booking failed. Try again.");
      }
    } catch (error) {
      console.error("Error making booking:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading cars...</div>; // Loading message
  }

  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        <h2 className="text-center text-dark mb-4">Book a Car</h2>

        <form onSubmit={handleBookingSubmit} className="bg-light shadow-sm p-5 rounded-lg border">
          <div className="mb-4">
            <label htmlFor="car" className="form-label text-dark">Select Car:</label>
            <select
              id="car"
              className="form-select form-select-lg"
              value={selectedCar}
              onChange={handleCarSelect}
              required
            >
              <option value="">Select a car</option>
              {cars.length > 0 ? (
                cars.map((car) => (
                  <option key={car.id} value={car.id}>{car.carName}</option> // Updated to use carName
                ))
              ) : (
                <option value="" disabled>No cars available</option>
              )}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="form-label text-dark">Price/day:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="price"
              value={`$${price}`} // Display price
              readOnly />
          </div>

          <div className="mb-4">
            <label htmlFor="userName" className="form-label text-dark">Your Name:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} // Corrected variable name
              required />
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="form-label text-dark">Start Date:</label>
            <input
              type="date"
              className="form-control form-control-lg"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="form-label text-dark">End Date:</label>
            <input
              type="date"
              className="form-control form-control-lg"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required />
          </div>

          <button type="submit" className="btn bg-black text-white w-30 py-3 fs-5">Book Now</button>
        </form>
      </div>
    </>
  );
};

export default UserView;