const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "SUBSCRIPTION PLAN", uid: "subscription_plan", sortable: true },
  { name: "SUBSCRIBED UNTIL", uid: "subscribed_until", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" }
];
const approveColumns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "ACTIONS", uid: "actions" }
];
const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Inactive", uid: "inactive" }
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    subscription_plan: "Premium",
    subscribed_until: "2024-08-10",
    status: "active",
    email: "tony.reichert@example.com"
  },
  {
    id: 2,
    name: "Zoey Lang",
    subscription_plan: "Premium",
    subscribed_until: "2024-07-15",
    status: "paused",
    email: "zoey.lang@example.com"
  },
  {
    id: 3,
    name: "Jane Fisher",
    subscription_plan: "Basic",
    subscribed_until: "2024-09-25",
    status: "active",
    email: "jane.fisher@example.com"
  },
  {
    id: 4,
    name: "William Howard",
    subscription_plan: "Premium",
    subscribed_until: "2024-06-30",
    status: "inactive",
    email: "william.howard@example.com"
  },
  {
    id: 5,
    name: "Kristen Copper",
    subscription_plan: "Premium",
    subscribed_until: "2024-11-14",
    status: "active",
    email: "kristen.cooper@example.com"
  },
  {
    id: 6,
    name: "Brian Kim",
    subscription_plan: "Premium",
    subscribed_until: "2024-12-05",
    status: "active",
    email: "brian.kim@example.com"
  },
  {
    id: 7,
    name: "Michael Hunt",
    subscription_plan: "Basic",
    subscribed_until: "2024-08-22",
    status: "paused",
    email: "michael.hunt@example.com"
  },
  {
    id: 8,
    name: "Samantha Brooks",
    subscription_plan: "Basic",
    subscribed_until: "2024-10-01",
    status: "active",
    email: "samantha.brooks@example.com"
  },
  {
    id: 9,
    name: "Frank Harrison",
    subscription_plan: "Basic",
    subscribed_until: "2024-09-11",
    status: "inactive",
    email: "frank.harrison@example.com"
  },
  {
    id: 10,
    name: "Emma Adams",
    subscription_plan: "Basic",
    subscribed_until: "2024-07-29",
    status: "active",
    email: "emma.adams@example.com"
  },
  {
    id: 11,
    name: "Brandon Stevens",
    subscription_plan: "Basic",
    subscribed_until: "2024-08-17",
    status: "active",
    email: "brandon.stevens@example.com"
  },
  {
    id: 12,
    name: "Megan Richards",
    subscription_plan: "Premium",
    subscribed_until: "2024-11-04",
    status: "paused",
    email: "megan.richards@example.com"
  },
  {
    id: 13,
    name: "Oliver Scott",
    subscription_plan: "Basic",
    subscribed_until: "2024-06-28",
    status: "active",
    email: "oliver.scott@example.com"
  },
  {
    id: 14,
    name: "Grace Allen",
    subscription_plan: "Premium",
    subscribed_until: "2024-10-12",
    status: "active",
    email: "grace.allen@example.com"
  },
  {
    id: 15,
    name: "Noah Carter",
    subscription_plan: "Basic",
    subscribed_until: "2024-08-05",
    status: "paused",
    email: "noah.carter@example.com"
  },
  {
    id: 16,
    name: "Ava Perez",
    subscription_plan: "Premium",
    subscribed_until: "2024-12-01",
    status: "active",
    email: "ava.perez@example.com"
  },
  {
    id: 17,
    name: "Liam Johnson",
    subscription_plan: "Basic",
    subscribed_until: "2024-09-30",
    status: "active",
    email: "liam.johnson@example.com"
  },
  {
    id: 18,
    name: "Sophia Taylor",
    subscription_plan: "Premium",
    subscribed_until: "2024-07-20",
    status: "active",
    email: "sophia.taylor@example.com"
  },
  {
    id: 19,
    name: "Lucas Harris",
    subscription_plan: "Premium",
    subscribed_until: "2024-11-22",
    status: "paused",
    email: "lucas.harris@example.com"
  },
  {
    id: 20,
    name: "Mia Robinson",
    subscription_plan: "Premium",
    subscribed_until: "2024-10-28",
    status: "active",
    email: "mia.robinson@example.com"
  }
];

const traineesAwaitingApproval = [
  {
    id: 1,
    name: "Tony Reichert",
    subscription_plan: "Premium",
    subscribed_until: "2022-12-01",
    status: "active",
    email: "tony.reichert@example.com"
  },
  {
    id: 2,
    name: "Zoey Lang",
    subscription_plan: "Premium",
    subscribed_until: "2022-12-31",
    status: "paused",
    email: "zoey.lang@example.com"
  },
  {
    id: 3,
    name: "Jane Fisher",
    subscription_plan: "Premium",
    subscribed_until: "2022-12-31",
    status: "active",
    email: "jane.fisher@example.com"
  },
  {
    id: 4,
    name: "William Howard",
    subscription_plan: "Premium",
    subscribed_until: "2022-12-31",
    status: "inactive",
    email: "william.howard@example.com"
  },
  {
    id: 5,
    name: "Kristen Copper",
    subscription_plan: "Premium",
    subscribed_until: "2022-12-31",
    status: "active",
    email: "kristen.cooper@example.com"
  }
];

export {
  columns,
  approveColumns,
  users,
  statusOptions,
  traineesAwaitingApproval
};
