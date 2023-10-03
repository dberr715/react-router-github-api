import { useLoaderData, Link, Outlet } from "react-router-dom";

export async function loader() {
  const url = `https://api.github.com/repos/facebook/create-react-app/issues`;
  const issueList = await fetch(url).then((response) => response.json());
  return { issueList };
}

export async function loadIssueBody(issueId) {

  const url = `https://api.github.com/repos/facebook/create-react-app/issues/${issueId}`;
  const issueBody = await fetch(url).then((response) => response.json());
  return { issueBody };
}

export default function Root() {
  const { issueList } = useLoaderData();
  return (
    <>
      <h1>Github Issue List</h1>
      <Outlet />
      <ol>
        {issueList.map((issue) => {
          return (
            <li key={issue.id}>
              {" "}
              <Link onClick={loadIssueBody(issue.id)} to={`/issue/${issue.number}`}>
                {" "}
                {issue.title}{" "}
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
