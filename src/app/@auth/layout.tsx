"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import Logo from "@/components/shared/navs/Logo";

const ModalLayout = ({ children }: {children: React.ReactNode}) => {
  const router = useRouter();

  return (
    <>
      <Modal
        radius="sm"
        size="xl"
        isOpen={true}
        className="py-10"
        isDismissable={false}
        onClose={() => router.back()}
      >
        <ModalContent>
          <ModalHeader className=" flex justify-center">
            <Logo showText={false} textColor={""} logoSrc={"/logo-white.svg"} />
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLayout;
