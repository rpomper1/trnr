import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { users } from "../data";
import { Button } from "@nextui-org/react";

export default function DetailedTrainerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [traineeDetails, setTraineeDetails] = useState(null);
  useEffect(() => {
    if (location) {
      const traineeId = location.pathname.split("/").pop();
      const trainee = users.find((user) => user.id == traineeId);
      if (trainee) {
        setTraineeDetails(trainee);
      }
    }
  }, [location]);

  return (
    <main>
      <Button color="primary" onClick={() => navigate("/trainer")}>
        Back
      </Button>
      <h1>Trainee Details</h1>
      <p>Here you can see detailed information about a trainee.</p>
      <div>
        <pre>{JSON.stringify(traineeDetails, null, 2)}</pre>
      </div>
    </main>
  );
}
