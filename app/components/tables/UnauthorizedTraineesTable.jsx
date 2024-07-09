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
import { traineesAwaitingApproval, approveColumns } from "../../traineeData";
import ApproveTraineeModal from "../modals/ApproveTraineeModal";

export default function UnauthorizedTraineesTable() {
  const [showApproveTraineeModal, setShowApproveTraineeModal] = useState(false);
  const [selectedTraineeForApproval, setSelectedTraineeForApproval] =
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
              setSelectedTraineeForApproval(user);
              setShowApproveTraineeModal(true);
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
      {showApproveTraineeModal && (
        <ApproveTraineeModal
          trainee={selectedTraineeForApproval}
          onClose={() => {
            setSelectedTraineeForApproval(null);
            setShowApproveTraineeModal(false);
          }}
        />
      )}
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={approveColumns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={traineesAwaitingApproval}>
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
