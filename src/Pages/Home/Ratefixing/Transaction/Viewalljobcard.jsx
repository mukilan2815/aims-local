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
import { makeData } from "../Masters/makeData";

const Example = () => {
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
        accessorKey: "componentType",
        header: "Component Type",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "oldPLNo",
        header: "Old PL No",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "upNo",
        header: "UP No",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "plNo",
        header: "PL No",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "briefDescription",
        header: "Brief Description",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "detailedDescription",
        header: "Detailed Description",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "selectUnit",
        header: "Select Unit",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "componentRate",
        header: "Component Rate",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "availabilityStock",
        header: "Availability Stock",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "previousPurchaseValue",
        header: "Previous Purchase Value",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "closingShop",
        header: "Closing Shop",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "shopFlow",
        header: "Shop Flow",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "category",
        header: "Category",
        mantineEditTextInputProps: ({ cell, row }) => ({}),
      },
      {
        accessorKey: "requiredFor",
        header: "Required For",
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve(makeData);
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

const ExampleWithProviders = () => (
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <Example />
    </ModalsProvider>
  </QueryClientProvider>
);

export default ExampleWithProviders;

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
