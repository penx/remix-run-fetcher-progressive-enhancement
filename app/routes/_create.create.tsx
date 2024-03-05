import { ActionFunctionArgs, json, redirect } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");

  if (!name || typeof name !== "string" || name.length === 0) {
    return json({ validationError: "Name is required" });
  }

  return redirect("./success");
}

export default function Index() {
  // This is needed to ensure the layout route is rendered
  return null;
}
