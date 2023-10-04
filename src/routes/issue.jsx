import { useLoaderData, Link } from "react-router-dom";

export async function loader({ params }) {
  const url = `https://api.github.com/repos/facebook/create-react-app/issues/${params.issueId}`;
  const issue = await fetch(url).then((response) => response.json());
  return { issue };
}

export default function issue() {
  const { issue } = useLoaderData();
  return (
    <>
      <h2>
        Issue number: {issue.number} : {issue.title}
      </h2>
      <div>
        <p>{issue.body}</p>
      </div>
    </>
  );
}

// export async function action({params}) {
//     return redirect (``)
// }
