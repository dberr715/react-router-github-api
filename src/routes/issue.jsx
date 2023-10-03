import { useLoaderData, Link } from "react-router-dom";
import { issueBody } from "./root";
export async function loader() {
  const url = "https://api.github.com/repos/facebook/create-react-app/issues/";
  const issueList = await fetch(url).then((response) => response.json());
  return { issueList };
}

export default function issue() {
  const { issueList, } = useLoaderData();
  return (
    <>
      <p>This will be the issue page</p>

      {issueList.body(() => {
        return (
          <>
            <ul>
              <li key={issueBody.id}>
                <p> </p>
                <Link to={`/issue/${issueBody.number}`}>
                  <br /> {issueBody.body}{" "}
                </Link>
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
}

// export async function action({params}) {
//     return redirect (``)
// }
