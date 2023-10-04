import { useLoaderData } from "react-router-dom";
import { IssueList } from "../components/IssueList";

export async function loader() {
  const url = "https://api.github.com/repos/facebook/create-react-app/issues";
  const issueList = await fetch(url).then((response) => response.json());

  return { issueList };
}

export default function Home() {
  const { issueList } = useLoaderData();
  return (
    <>
      <IssueList issueList={issueList} />
    </>
  );
}
