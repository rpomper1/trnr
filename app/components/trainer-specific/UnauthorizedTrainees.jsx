import { Badge, Button } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";
import { traineesAwaitingApproval } from "~/traineeData";
import { limitDisplayedInteger } from "~/utils/stringUtils";

export default function UnauthorizedTrainees() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>
          Trainees that completed the registration process await your approval.
        </p>
      </div>
      <Badge
        isInvisible={traineesAwaitingApproval.length === 0}
        color="danger"
        content={limitDisplayedInteger(traineesAwaitingApproval.length)}
      >
        <Button
          color="primary"
          onClick={() => navigate("/trainer/trainee-requests")}
        >
          View Trainee Requests
        </Button>
      </Badge>
    </div>
  );
}
