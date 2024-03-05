import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <p>
      Successfully created entity. <Link to="/">Create another</Link>.
    </p>
  );
}
