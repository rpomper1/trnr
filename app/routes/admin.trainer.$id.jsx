import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { users } from "../data";
import { Button } from "@nextui-org/react";

export default function DetailedTrainerPage() {
  const location = useLocation();
  const navigate = useNavigate();
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

  return (
    <main>
      <Button color="primary" onClick={() => navigate("/admin")}>
        Back
      </Button>
      <h1>Trainer Details</h1>
      <p>Here you can see detailed information about a trainer.</p>
      <div>
        <pre>{JSON.stringify(trainerDetails, null, 2)}</pre>
      </div>
    </main>
  );
}
