import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading student data…</h2>;
  }

  return (
    <main>
      <h2>ITIS 3135 – Student Introductions</h2>

      {students.map((student) => (
        <div
          key={student.email}
          style={{
            background: "#ffe4e4",
            padding: "15px",
            margin: "10px auto",
            width: "80%",
            borderRadius: "10px",
          }}
        >
          <h3>{student.name}</h3>
          <p><strong>Email:</strong> {student.email}</p>

          {student.image && (
            <img
              src={student.image}
              alt={student.name}
              style={{ width: "200px", borderRadius: "10px" }}
            />
          )}

          <p><strong>Background:</strong> {student.background}</p>
          <p><strong>Professional:</strong> {student.professional}</p>
          <p><strong>Academic:</strong> {student.academic}</p>

          {student.courses && (
            <div>
              <strong>Courses:</strong>
              <ul>
                {student.courses.map((c, index) => (
                  <li key={index}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {student.quote && (
            <p><strong>Favorite Quote:</strong> "{student.quote}"</p>
          )}
        </div>
      ))}
    </main>
  );
}
