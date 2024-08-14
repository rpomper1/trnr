import { Badge, Button } from "@nextui-org/react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { limitDisplayedInteger } from "~/utils/stringUtils";

export default function UnauthorizedTrainees() {
  const navigate = useNavigate();
  const traineesAwaitingApproval = useLoaderData().unapprovedTrainees;
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
