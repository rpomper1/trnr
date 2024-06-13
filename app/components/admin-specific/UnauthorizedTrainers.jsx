import { Badge, Button } from "@nextui-org/react";
import { trainersAwaitingApproval } from "~/data";
import { limitDisplayedInteger } from "~/utils/stringUtils";

export default function UnauthorizedTrainers() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1>Unauthorized Trainers</h1>
        <p>Trainers that completed the registration await your approval. </p>
      </div>
      <Badge
        isInvisible={trainersAwaitingApproval.length === 0}
        color="danger"
        content={limitDisplayedInteger(trainersAwaitingApproval.length)}
      >
        <Button color="primary">View Trainer Requests</Button>
      </Badge>
    </div>
  );
}
