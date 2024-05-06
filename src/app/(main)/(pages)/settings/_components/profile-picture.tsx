"use client";

import React from "react";
import UploadCareButton from "./uploadCareButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  onDelete?: any;
  userImage: string | null;
  onUpload?: any;
};

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    const resp = await onDelete();
    if (resp) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="User_Image" fill />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
