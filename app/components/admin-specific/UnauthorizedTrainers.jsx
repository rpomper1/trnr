import { Badge, Button } from "@nextui-org/react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { limitDisplayedInteger } from "~/utils/stringUtils";

export default function UnauthorizedTrainers() {
  const navigate = useNavigate();
  const trainersAwaitingApproval = useLoaderData().unapprovedTrainers;
  console.log("trainersAwaitingApproval", trainersAwaitingApproval);

  return (
    <div className="flex justify-between items-center">
      <div>
        <p>
          Trainers that completed the registration process await your approval.
        </p>
      </div>
      <Badge
        isInvisible={trainersAwaitingApproval?.length === 0}
        color="danger"
        content={limitDisplayedInteger(trainersAwaitingApproval?.length)}
      >
        <Button
          color="primary"
          onClick={() => navigate("/admin/trainer-requests")}
        >
          View Trainer Requests
        </Button>
      </Badge>
    </div>
  );
}
