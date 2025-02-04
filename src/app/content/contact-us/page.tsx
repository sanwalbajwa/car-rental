'use client';
import Header from "../../components/Header";
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // You can add form validation or submission logic here
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
    // Reset error and handle form submission
    setError('');
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <><Header/>
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <form>
  <div className="form-row">
    <div className="col-md-4 mb-3 pe-2">
      <label htmlFor="validationDefault01">First name</label>
      <input type="text" className="form-control" id="validationDefault01" placeholder="First name" required/>
    </div>
    <div className="col-md-4 mb-3 pe-2">
      <label htmlFor="validationDefault02">Last name</label>
      <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" required/>
    </div>
    <div className="col-md-4 mb-3 pe-2">
      <label htmlFor="validationDefaultUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3 pe-2">
      <label htmlFor="validationDefault03">City</label>
      <input type="text" className="form-control" id="validationDefault03" placeholder="City" required/>
    </div>
    <div className="col-md-3 mb-3 pe-2">
      <label htmlFor="validationDefault04">State</label>
      <input type="text" className="form-control" id="validationDefault04" placeholder="State" required/>
    </div>
    <div className="col-md-3 mb-3 pe-2">
      <label htmlFor="validationDefault05">Zip</label>
      <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required/>
    </div>
  </div>
  <div className="form-group mb-4">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button className="btn btn-dark" type="submit">Submit form</button>
</form>
    </div></>
  );
}