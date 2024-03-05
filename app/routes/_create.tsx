import type { MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "List Create" }];
};

export default function Index() {
  const fetcher = useFetcher<typeof import("./_create.create").action>();
  return (
    <>
      <h1>Requirements</h1>
      <ul>
        <li>A form that posts to an action at a different endpoint.</li>
        <li>
          The create action returns a validation error if unsuccessful, or a
          redirect if successful.
        </li>
        <li>
          The form should still work, with validation errors shown when a submit
          is unsuccessful, when JavaScript is not available.
        </li>
        <li>
          (Validation errors should be removed when selecting &quot;Create
          another&quot;)
        </li>
      </ul>
      <fetcher.Form action="./create" method="POST">
        <input type="text" name="name" />
        <button type="submit">Submit</button>
        {fetcher.data?.validationError ? (
          <div>{fetcher.data?.validationError}</div>
        ) : null}
      </fetcher.Form>
    </>
  );
}
