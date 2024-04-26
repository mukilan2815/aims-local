import React, { useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { ActionIcon, Box, Button, Text, Tooltip } from "@mantine/core";
import { ModalsProvider, modals } from "@mantine/modals";
import { IconTrash } from "@tabler/icons-react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { makeData2 } from "../Masters/makeData2";

const Newjobcard = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [editedUsers, setEditedUsers] = useState({});
  const { mutateAsync: createUser, isLoading: isCreatingUser } =
    useCreateUser();
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  const { mutateAsync: updateUsers, isLoading: isUpdatingUser } =
    useUpdateUsers();
  const { mutateAsync: deleteUser, isLoading: isDeletingUser } =
    useDeleteUser();

  const handleCreateUser = async ({ values, exitCreatingMode }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => !!error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    exitCreatingMode();
  };

  const handleSaveUsers = async () => {
    if (Object.values(validationErrors).some((error) => !!error)) return;
    await updateUsers(Object.values(editedUsers));
    setEditedUsers({});
  };

  const openDeleteConfirmModal = (row) =>
    modals.openConfirmModal({
      title: "Are you sure you want to delete this user?",
      children: (
        <Text>
          Are you sure you want to delete {row.original.firstName}{" "}
          {row.original.lastName}? This action cannot be undone.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: () => deleteUser(row.original.id),
    });

  const columns = useMemo(
    () => [
      {
        accessorKey: "sno",
        header: "S.No",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "rfInitial",
        header: "RF's Initial",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "woNo",
        header: "Wo.no",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "jcNo",
        header: "Jc.no",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "jcType",
        header: "jctype",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "item",
        header: "item",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "shop",
        header: "shop",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "subassy",
        header: "subassy.",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "remarks",
        header: "remarks",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "refNo",
        header: "Ref.no",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "jcQty",
        header: "JC Qty",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "qps",
        header: "QPS",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "unit",
        header: "unit",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "batchNo",
        header: "Batch no",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "batchQty",
        header: "Batch qty",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "allocatedTo",
        header: "Allocated to",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "started",
        header: "started",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "completed",
        header: "completed",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "preparedTime",
        header: "prepared Time",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "allowedTime",
        header: "Allowed Time",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "totalTime",
        header: "total time",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "timeTaken",
        header: "time taken",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "abnormality",
        header: "abnormality",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "passed",
        header: "passed",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "rejected",
        header: "rejected",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "export",
        header: "export",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "createdOn",
        header: "created on",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "print",
        header: "Print",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "status",
        header: "Status",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
    ],
    [editedUsers, validationErrors]
  );
  const handleExportRows = (rows) => {
    const doc = new jsPDF({ orientation: "landscape" });
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    const columnStyles = columns.reduce((styles, column, index) => {
      styles[index] = { align: "left" };
      return styles;
    }, {});

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
      startY: 20,
      margin: { top: 20, bottom: 20 },
      styles: { overflow: "linebreak" },
      headStyles: { fillColor: [33, 150, 243], textColor: [255, 255, 255] },
      columnStyles: columnStyles,
      bodyStyles: { fillColor: [255, 255, 255], textColor: [33, 33, 33] },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    doc.save("mrt-pdf-example.pdf");
  };

  const table = useMantineReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "row",
    editDisplayMode: "table",
    enableEditing: true,
    enableRowActions: true,
    positionActionsColumn: "first",
    getRowId: (row) => row.id,
    mantineToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: "red",
          children: "Error loading data",
        }
      : undefined,
    mantineTableContainerProps: {
      sx: {
        minHeight: "500px",
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    renderRowActions: ({ row }) => (
      <Tooltip label="Delete">
        <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
          <IconTrash />
        </ActionIcon>
      </Tooltip>
    ),
    renderBottomToolbarCustomActions: () => (
      <Button
        color="blue"
        onClick={handleSaveUsers}
        disabled={
          Object.keys(editedUsers).length === 0 ||
          Object.values(validationErrors).some((error) => !!error)
        }
        loading={isUpdatingUser}
      >
        Save
      </Button>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          className="bg-red-500"
          onClick={() => handleExportRows(table.getRowModel().rows)}
        >
          Export All Rows
        </Button>
      </Box>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MantineReactTable table={table} />;
};

function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(["users"], (prevUsers) => [
        ...prevUsers,
        {
          ...newUserInfo,
          id: (Math.random() + 1).toString(36).substring(7),
        },
      ]);
    },
  });
}

function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const data = await makeData2(); // Fetch data here or replace with your actual data-fetching logic
        return Promise.resolve(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    refetchOnWindowFocus: false,
  });
}

function useUpdateUsers() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (users) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    onMutate: (newUsers) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.map((user) => {
          const newUser = newUsers.find((u) => u.id === user.id);
          return newUser ? newUser : user;
        })
      );
    },
  });
}

function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    onMutate: (userId) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.filter((user) => user.id !== userId)
      );
    },
  });
}

const queryClient = new QueryClient();

const Newjobcardprovider = () => (
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <Newjobcard />
    </ModalsProvider>
  </QueryClientProvider>
);

export default Newjobcardprovider;

const validateRequired = (value) => !!value?.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

function validateUser(user) {
  return {
    firstName: !validateRequired(user.firstName)
      ? "First Name is Required"
      : "",
    lastName: !validateRequired(user.lastName) ? "Last Name is Required" : "",
    email: !validateEmail(user.email) ? "Incorrect Email Format" : "",
  };
}
