import React, { useState } from 'react';

function UpdateProfileModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: 'Aamuktha',
    email: 'aamukthasetty2005@gmail.com',
    phone: '+1334567890',
    college: 'Technology Institute',
    yearOfGraduation: 2025,
    programmeEnrolled: 'MTech',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log('Updated Details: ', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
      <div className="bg-white p-4 rounded-md w-11/12 md:w-1/3 relative max-h-[80vh] overflow-auto">
        {/* Cross button to close the modal */}
        <button onClick={onClose} className="absolute top-4 right-6 text-gray-500 hover:text-black">
          ✖
        </button>

        <p className="text-xl font-bold mb-4 text-center">Update Profile</p>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Input fields in pairs (two per row) */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="text"
                name="Password"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
              />
            </div>

            
          </div>
          <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
            </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your college name"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
              <input
                type="number"
                name="yearOfGraduation"
                value={formData.yearOfGraduation}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your year of graduation"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Program Enrolled</label>
              <input
                type="text"
                name="programmeEnrolled"
                value={formData.programmeEnrolled}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your program"
              />
            </div>
          </div>

          {/* Update button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-orange-500 text-white font-medium py-2 px-4 rounded hover:bg-orange-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfileModal;
