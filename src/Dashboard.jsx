import React, { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const Dashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [qrCodeInput, setQrCodeInput] = useState("");
  const fileInputRef = useRef(null);

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

  const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const html5QrCode = new Html5Qrcode("qr-reader");

  // Map QR code URLs to student PC serials
  const qrMap = {
    "https://qrco.de/bg42Rz": "Yeab12345",
    "https://qrco.de/bg42Wj": "Tsedi12345",
    "https://qrco.de/bg42ic": "YoniD12345",
  };

  try {
    const result = await html5QrCode.scanFile(file, true);
    console.log("Scanned QR content:", result);

    const cleanedResult = result.trim();
    const serialFromMap = qrMap[cleanedResult] || cleanedResult;

    const matched = students.find(
      (s) => s.pcSerial.toLowerCase() === serialFromMap.toLowerCase()
    );

    if (matched) {
      setStudentData(matched);
    } else {
      setStudentData(null);
      alert(`No student found for scanned QR content: ${cleanedResult}`);
    }
  } catch (err) {
    console.error("QR scanning failed", err);
    alert("QR Code could not be read.");
  }
};


  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        Smart Anti-Theft and Identification System for PC
      </h1>

      {/* PC Serial Input Method */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Manual Serial Number Input</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter PC Serial Number"
              value={qrCodeInput}
              onChange={(e) => setQrCodeInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleScan}>
              Check
            </button>
          </div>
        </div>
      </div>

      {/* QR Code Image Upload */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Upload QR Code Image</h5>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="form-control"
          />
          <div id="qr-reader" style={{ display: "none" }}></div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
  <button
    className="btn btn-danger"
    onClick={() => {
      setQrCodeInput("");
      setStudentData(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    }}
  >
    Cancel
  </button>
</div>

      {/* Student Info */}
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
