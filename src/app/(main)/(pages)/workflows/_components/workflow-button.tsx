"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkbflowButton = (props: Props) => {
  const handleClick = () => {
    /*         setOpen(
            <CustomModal
                title="Create a Workflow Automation"
                subheading="Workflows are a powerfull that help you automate tasks."
            >
                <Workflowform />
            </CustomModal>
        ) */
  };

  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkbflowButton;
