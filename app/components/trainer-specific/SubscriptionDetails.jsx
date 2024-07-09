import { Button } from "@nextui-org/react";
import { formatDate } from "~/utils/dateUtils";

const SubscriptionDetails = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>Subscription plan: Basic</p>
        <p>Active until: {formatDate("2024-06-30")}</p>
        <p>Active trainees: 37/50</p>
      </div>
      <div className="flex gap-2">
        <Button
          color="primary"
          //   onClick={() => navigate("/trainer/trainee-requests")}
        >
          View Details
        </Button>
        <Button>Upgrade</Button>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
