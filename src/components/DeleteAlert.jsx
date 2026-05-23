"use client";
import toast from "react-hot-toast";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteAlert({ car }) {
  const { _id, carName } = car;

  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    //   credentials: "include"
    });
    toast.error("Car deleted successfully!"); // Notify user of successful deletion
    const data = await res.json(); 
    console.log(data);
    redirect('/car')
   
  };
  return (
    <AlertDialog>
      <Button className={"text-red-500 rounded-none"} variant="outline">
        <TrashBin /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete car permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{carName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
