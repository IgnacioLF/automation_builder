import React from "react";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="flex flex-cool gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
        Workflows
        <WorkflowButton />
      </h1>
    </div>
  );
};

export default Workflows;
