import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Button
} from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import ApproveTraineeModal from "../modals/ApproveTraineeModal";
import ApproveTrainerModal from "../modals/ApproveTrainerModal";
const approveColumns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "ACTIONS", uid: "actions" }
];
export default function UnauthorizedTrainersTable() {
  const trainersAwaitingApproval = useLoaderData();
  const [showApproveTrainerModal, setShowApproveTrainerModal] = useState(false);
  const [selectedTrainerForApproval, setSelectedTrainerForApproval] =
    useState(null);
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );

      case "actions":
        return (
          <Button
            onClick={() => {
              setSelectedTrainerForApproval(user);
              setShowApproveTrainerModal(true);
            }}
          >
            Approve
          </Button>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      {showApproveTrainerModal && (
        <ApproveTrainerModal
          trainer={selectedTrainerForApproval}
          onClose={() => {
            setSelectedTrainerForApproval(null);
            setShowApproveTrainerModal(false);
          }}
        />
      )}
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={approveColumns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={trainersAwaitingApproval}
          emptyContent={"No users found"}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
