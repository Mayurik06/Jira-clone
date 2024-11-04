import { getCurrent } from "@/features/auth/action";
import { getWorkspaces } from "@/features/workspaces/action";
import { redirect } from "next/navigation";

// Type guard to ensure workspaces has 'documents' property
function hasDocuments(
  workspaces: any
): workspaces is { documents: { [key: string]: any }[]; total: number } {
  return workspaces && Array.isArray(workspaces.documents);
}

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  const workspaces = await getWorkspaces();

  if (hasDocuments(workspaces)) {
    if (workspaces.total === 0) {
      redirect("/workspaces/create");
    } else {
      redirect(`/workspaces/${workspaces.documents[0].$id}`);
    }
  } else {
    // Handle cases where 'documents' is not present (e.g., error state)
    redirect("/workspaces/create");
  }
}
