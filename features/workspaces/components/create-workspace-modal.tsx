'use client'
import { ResponsiveModal } from "@/components/responsive-model";
import { CreateWorkspaceForm } from "./create-workspace-form";

export const CreateWorkspaceModal=()=>{
return(
    <ResponsiveModal open onOpenChange={()=>{}}>
        <CreateWorkspaceForm/>
    </ResponsiveModal>
)
}