"use client";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import React from "react";
import { RiAddCircleFill } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { WorkspaceAvatar } from "@/features/workspaces/components/worksace-avatar";
import { useRouter } from "next/navigation";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

type Props = {};

export default function WorkspacesSwitcher({}: Props) {
    const workspaceId=useWorkspaceId();
  const router = useRouter();
  const { data: workspaces } = useGetWorkspaces();

  // Type guard to check if workspaces has the documents property
  const hasDocuments = (
    workspaces: any
  ): workspaces is { documents: any[] } => {
    return workspaces && Array.isArray(workspaces.documents);
  };
  const onSelect = (id: string) => {
    router.push(`/workspaces/${id}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
      </div>
      <Select onValueChange={onSelect} value={workspaceId}>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          {hasDocuments(workspaces) &&
            workspaces.documents.map((workspace) => (
              <SelectItem key={workspace.$id} value={workspace.$id}>
                <div className="flex justify-start items-center gap-3 font-medium">
                  <WorkspaceAvatar
                    name={workspace.name}
                    image={workspace.imageUrl}
                  />
                  <span className="truncate">{workspace.name}</span>
                </div>
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
