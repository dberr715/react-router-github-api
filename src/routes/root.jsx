import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>Github Issue List</h1>

      <Outlet />
    </>
  );
}
