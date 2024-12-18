import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

// Adjust the response type based on the actual response you are receiving
type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>;


export const useLogout = () => {
  const router=useRouter()
  const queryClient=useQueryClient();
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.logout["$post"]();
      return await response.json(); // Assuming the response contains a success field
    },
    onSuccess:()=>{
     router.refresh()
     queryClient.invalidateQueries({queryKey:["current"]}),
     queryClient.invalidateQueries({queryKey:["workspaces"]})
    }
  });

  return mutation;
};
