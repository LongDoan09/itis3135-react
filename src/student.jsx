import { useEffect, useState } from "react";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h2>Students</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        students.map((s) => (
          <div
            key={s.email}
            style={{
              border: "1px solid black",
              margin: "15px auto",
              padding: "10px",
              width: "80%",
              background: "white",
            }}
          >
            <h3>{s.name}</h3>

            {s.media?.image && (
              <img
                src={s.media.image}
                alt={s.name}
                style={{ width: "150px", borderRadius: "10px" }}
              />
            )}

            <p><b>Email:</b> {s.email}</p>
            <p><b>Major:</b> {s.major}</p>
          </div>
        ))
      )}
    </main>
  );
}
