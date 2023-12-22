"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import AuthOptions from "@/components/auth/AuthOptions";
import Logo from "../navs/Logo";
import { useRouter } from "next/navigation";

const AuthModal = ({ openAuthModal }: { openAuthModal: boolean }) => {
  const router = useRouter();

  return (
    <Modal
      radius="sm"
      size="xl"
      isOpen={openAuthModal}
      className="py-10"
      isDismissable={false}
      onClose={() => router.back()}
    >
      <ModalContent>
        <ModalHeader className=" flex justify-center">
          <Logo showText={false} textColor={""} logoSrc={"/logo-white.svg"} />
        </ModalHeader>
        <ModalBody>
          {" "}
          <AuthOptions />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
