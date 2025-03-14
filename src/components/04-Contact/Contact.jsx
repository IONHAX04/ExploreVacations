import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [dialogVisible, setDialogVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogVisible(true);
  };

  return (
    <div>
      <div className="contactPage001">
        <div className="h-[80vh]"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-6 bg-gray-100">
        {/* Left Side: Contact Info */}
        <div className="flex-1 p-8 bg-white rounded-lg" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            We’d love to hear from you! Contact us today.
          </p>
          <div className="mt-6 space-y-3">
            <p className="text-lg">
              📧 <span className="font-semibold">Email:</span>{" "}
              info@explorevacations.com
            </p>
            <p className="text-lg">
              📞 <span className="font-semibold">Phone:</span> +1 234 567 890
            </p>
            <p className="text-lg">
              📍 <span className="font-semibold">Address:</span> 123 Travel St,
              Zurich, Switzerland
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          className="flex-1 p-8 bg-white rounded-lg ml-0 md:ml-10 mt-6 md:mt-0"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="p-float-label">
              <InputText
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>

            {/* Email */}
            <div className="p-float-label">
              <InputText
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>

            {/* Mobile */}
            <div className="p-float-label">
              <InputText
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              <label htmlFor="mobile">Mobile Number</label>
            </div>

            {/* Message */}
            <div className="p-float-label">
              <InputTextarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              <label htmlFor="message">Your Message</label>
            </div>

            {/* Submit Button */}
            <Button
              label="Submit"
              className="w-full p-3 font-bold rounded"
              type="submit"
            />
          </form>
        </div>

        {/* Success Dialog */}
        <Dialog
          visible={dialogVisible}
          onHide={() => setDialogVisible(false)}
          header="Success"
          className="p-dialog-custom"
        >
          <p className="text-lg text-green-600 font-semibold">
            Form submitted successfully!
          </p>
        </Dialog>
      </div>
    </div>
  );
}
