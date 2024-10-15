import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

// Adjust the response type based on the actual response you are receiving
type ResponseType =InferResponseType<typeof client.api.auth.register["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.register["$post"]>["json"];

export const useRegister = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.auth.register["$post"]({ json });
      return await response.json(); // Assuming the response contains a success field
    },
    onSuccess:()=>{
      router.refresh()
      queryClient.invalidateQueries({queryKey:["current"]})
     }
  });

  return mutation;
};
