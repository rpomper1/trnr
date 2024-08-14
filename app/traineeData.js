const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "SUBSCRIBED UNTIL", uid: "subscribed_until", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" }
];
const approveColumns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "ACTIONS", uid: "actions" }
];
const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Inactive", uid: "inactive" }
];

export { columns, approveColumns, statusOptions };
