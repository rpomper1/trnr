import { Button } from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import { formatDate } from "~/utils/dateUtils";

const SubscriptionDetails = () => {
  const sessionTrainer = useLoaderData().sessionTrainer;
  console.log(sessionTrainer);
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>Subscription plan: {sessionTrainer?.subscriptionPlan}</p>
        <p>Active until: {formatDate(sessionTrainer?.paidUntil)}</p>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
