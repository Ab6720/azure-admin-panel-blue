
// This file exports toast functionality from sonner
import { toast } from "sonner";

const useToast = () => {
  return {
    toast,
    dismiss: toast.dismiss
  }
};

export { useToast, toast };
