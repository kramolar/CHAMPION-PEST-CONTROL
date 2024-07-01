import { useState } from "react";
import { SendEmailToCompany } from "../actions/SendEmailToCompany";

export const InquiryForm = () => {
  const [email, setEmail] = useState("");
  const [service, setService] = useState(null);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SendEmailToCompany(email, service, message);
      if (response.status === 200) {
        setSuccessMessage("Email sent successfully!");
        setErrorMessage(""); // Clear any previous error message
        setEmail("");
        setService(null);
        setMessage("");
      } else {
        console.error("Failed to send email. Status:", response.status);
        setErrorMessage("Failed to send email. Please try again later.");
        setSuccessMessage(""); // Clear any previous success message
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setErrorMessage("Failed to send email. Please try again later.");
      setSuccessMessage(""); // Clear any previous success message
    } finally {
      setSending(false); // Set sending state back to false after email attempt
    }
  };
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-4 px-4 mx-auto max-w-screen-md">
          <div className="mb-4 text-4xl font-bold text-center text-black-shade dark:text-white">
            Contact Us
          </div>
          {successMessage && (
            <div
              className="bg-grey-shade border border-blue-shade text-blue-shade px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{successMessage}</span>
            </div>
          )}
          {errorMessage && (
            <div
              className="bg-red-100 border border-red-shade text-red-shade px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-black-shade dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-slate-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block mb-2 text-lg font-medium text-black-shade dark:text-gray-300"
              >
                Service
              </label>
              <select
                id="service"
                className="block p-3 w-full text-sm text-black-shade bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select a service
                </option>
                <option value="residential">Residential Pest Control</option>
                <option value="commercial">Commercial Pest Control</option>
                <option value="industrial">Industrial Pest Control</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-black-shade dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`py-3 px-5 text-md font-medium text-center text-grey-shade rounded-lg bg-brown-shade2 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none ${
                successMessage ? "focus:ring-0" : "focus:ring-primary-300"
              } dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
