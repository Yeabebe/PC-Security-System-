import React, { useState } from "react";

const Dashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [qrCodeInput, setQrCodeInput] = useState("");

  // Simulated database
  const students = [
    {
      name: "Yeabsera Abebe",
      department: "Electrical and Computer Engineering",
      year: "4th Year",
      pcSerial: "Yeab12345",
      phone: "+251912345678",
      email: "yeabsera@example.com",
    },
    {
      name: "Tsedenia Asmare",
      department: "Electrical and Computer Engineering",
      year: "4th Year",
      pcSerial: "Tsedi12345",
      phone: "+251911223344",
      email: "tsedenia@example.com",
    },
    {
      name: "Yonas Ginbaru",
      department: "Electrical and Computer Engineering",
      year: "4th Year",
      pcSerial: "YoniD12345",
      phone: "+251910112233",
      email: "yonas.d@example.com",
    },
    {
      name: "Yonas Ginbaru",
      department: "Electrical and Computer Engineering",
      year: "4th Year",
      pcSerial: "YoniG12345",
      phone: "+251910334455",
      email: "yonas.g@example.com",
    },
    {
      name: "Yordanos Wubalem",
      department: "Electrical and Computer Engineering",
      year: "4th Year",
      pcSerial: "Yordi12345",
      phone: "+251913445566",
      email: "yordanos@example.com",
    },
  ];

  const handleScan = () => {
    const found = students.find((student) => student.pcSerial === qrCodeInput.trim());

    if (found) {
      setStudentData(found);
    } else {
      setStudentData(null);
      alert("No matching student found for the given PC Serial.");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Smart Anti-Theft and Identification System for PC
      </h1>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Scan QR Code</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter PC Serial Number"
              value={qrCodeInput}
              onChange={(e) => setQrCodeInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleScan}>
              Scan
            </button>
          </div>
        </div>
      </div>

      {studentData && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-3">Student Details</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Name:</strong> {studentData.name}</li>
              <li className="list-group-item"><strong>Department:</strong> {studentData.department}</li>
              <li className="list-group-item"><strong>Year:</strong> {studentData.year}</li>
              <li className="list-group-item"><strong>PC Serial:</strong> {studentData.pcSerial}</li>
              <li className="list-group-item"><strong>Phone:</strong> {studentData.phone}</li>
              <li className="list-group-item"><strong>Email:</strong> {studentData.email}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
