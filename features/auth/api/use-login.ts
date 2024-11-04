import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

// Adjust the response type based on the actual response you are receiving
type ResponseType = InferResponseType<typeof client.api.auth.login["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.login["$post"]>["json"];

export const useLogin = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.auth.login["$post"]({ json });
     if(!response.ok){
      throw new Error("Failed to logout")
     }
      return await response.json(); // Assuming the response contains a success field
    },
    onSuccess: () => {
      toast.success("Logged In")
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["current"] })
    },
    onError:()=>{
      toast.error("Failed to log in")
    }
  });

  return mutation;
};
