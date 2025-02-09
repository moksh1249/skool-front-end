// pages/index.js
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    prospectName: "",
    members: "",
    followers: "",
    rank: "",
    activity: "",
    admins: "",
    contributions: "",
    otherCommunities: "",
    communityName: "",
    communityPrice: "",
    paidMembers: "",
    youtube: "",
    instagram: "",
    facebook: "",
    linkedIn: "",
    skool: "",
    site: "",
    extraLinks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-backend-url.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("Form submitted successfully!");
      setFormData({
        prospectName: "",
        members: "",
        followers: "",
        rank: "",
        activity: "",
        admins: "",
        contributions: "",
        otherCommunities: "",
        communityName: "",
        communityPrice: "",
        paidMembers: "",
        youtube: "",
        instagram: "",
        facebook: "",
        linkedIn: "",
        skool: "",
        site: "",
        extraLinks: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Prospect Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
        {Object.keys(formData).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-gray-700 mb-2 capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
