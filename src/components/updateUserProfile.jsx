import React, { useState, useEffect, useCallback } from 'react';
import { FaUserCircle } from "react-icons/fa";
import debounce from "lodash.debounce";
import Spinner from '../components/Spinner';

import { updateUser } from '../api/userProfile';
function UpdateProfileModal({ isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showStats, setShowstats] = useState(true);
  const [userdetails, setuserdetails] = useState({});
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    yearOfGraduation: 0,
    programmeEnrolled: '',
    profilePicture: null,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/svg+xml")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData((prev) => ({ ...prev, profilePicture: file }));
    }
  };

  
   
    const fetchShowStats = async () => {
    const savedUser = JSON.parse(localStorage.getItem("savedUser"));
    const userId = savedUser._id;
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${backendUrl}/course/checkCourses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, courseId: "66b501e92bc0fdcb012c1449" }),
      });
      const json = await response.json();
      setShowstats(response.status === 200);
    } catch (error) {
      console.error("Error fetching showStats:", error);
    }
  };

  const debouncedFetchShowStats = useCallback(debounce(fetchShowStats, 300), []);

  // Effect to load userdetails into formData
  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setuserdetails(userData);
      setFormData({
        name: userData.name || '',
        phone: userData.phone || '',
        college: userData.college || '',
        yearOfGraduation: userData.yearOfGraduation || 0,
        programmeEnrolled: userData.programmeEnrolled || '',
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("college", formData.college);
    formDataToSend.append("yearOfGraduation", formData.yearOfGraduation);
    formDataToSend.append("programmeEnrolled", formData.programmeEnrolled);

    if (formData.profilePicture) {
      formDataToSend.append("profilePicture", formData.profilePicture);
    }

    try {
      setLoading(true);
      await updateUser(formDataToSend);
      setLoading(false);
      console.log("Updated Details: ", formData);
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
      <div className="bg-white p-4 rounded-md w-11/12 md:w-1/3 relative max-h-[80vh] overflow-auto">
        <button onClick={onClose} className="absolute top-4 right-6 text-gray-500 hover:text-black">
          ✖
        </button>
        <p className="text-xl font-bold mb-4 text-center">Update Profile</p>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="relative flex flex-col items-center justify-center w-40 h-40 border-2 border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <FaUserCircle className="w-16 h-16 text-gray-500 dark:text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                </div>
              )}
              <input
                id="dropzone-file"
                type="file"
                accept=".jpg,.jpeg,.png,.svg,.webp"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
          <div className="">
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
          <div className="">
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
          <div className="">
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
          <div className="">
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
          <div className="">
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

          {/* Update button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500  text-white font-medium py-2 px-4 rounded hover:bg-orange-600"
            >
              {loading ? <Spinner/>:"Update"}
            
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfileModal;
