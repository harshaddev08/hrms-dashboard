import Image from "next/image";
import { Button, Modal, Typography } from "../common";

interface ISuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: ISuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <Modal.Body className="space-y-4">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/sucess-image.png"}
            alt="success-image"
            height={150}
            width={100}
            className="pb-7"
          />
          <Typography
            variant="h4"
            weight="bold"
            className="text-dark-500 text-center pb-2"
          >
            Password Update Successfully
          </Typography>
          <Typography variant="body1" className="text-gray-500 pb-7">
            Your password has been update successfully
          </Typography>
        </div>

        <Button>Back to Login</Button>
      </Modal.Body>
    </Modal>
  );
};
