import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { users } from "../data";

export default function DetailedTrainerPage() {
  const location = useLocation();
  const [trainerDetails, setTrainerDetails] = useState(null);
  useEffect(() => {
    if (location) {
      const trainerId = location.pathname.split("/").pop();
      const trainer = users.find((user) => user.id == trainerId);
      if (trainer) {
        setTrainerDetails(trainer);
      }
    }
  }, [location]);

  console.log(location);
  return (
    <div className="bg-white p-5">
      <h1>Trainer Details</h1>
      <p>Here you can see detailed information about a trainer.</p>
      <div>
        <pre>{JSON.stringify(trainerDetails, null, 2)}</pre>
      </div>
    </div>
  );
}
