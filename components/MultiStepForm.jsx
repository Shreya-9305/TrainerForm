'use client';  // Add this directive
import { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  // Function to move to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to move to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold">Personal Info</h2>
          <form>
            <input type="text" placeholder="Trainer Name" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="email" placeholder="Email Id" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Mobile Number" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="file" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <div className="flex justify-between mt-4">
              <button type="button" disabled className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed">Back</button>
              <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold">Address</h2>
          <form>
            <input type="text" placeholder="Address Line 1" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Address Line 2" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="City" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="State" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Pincode" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Back</button>
              <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold">Qualification & Certificate</h2>
          <form>
            <input type="file" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Highest Qualification" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Marks %" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <textarea placeholder="Experience" className="block w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Back</button>
              <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
            </div>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold">Bank Account Details</h2>
          <form>
            <input type="text" placeholder="Account Number" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="IFSC Code" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Account Holder's Name" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Branch Name" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <p className="text-center mt-4">OR</p>
            <input type="text" placeholder="UPI Number" className="block w-full p-2 mb-4 border border-gray-300 rounded" />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Back</button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
