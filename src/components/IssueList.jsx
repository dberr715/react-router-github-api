import { Link } from "react-router-dom";

export const IssueList = ({ issueList }) => {
  return (
    <ul>
      {issueList.map((issue) => {
        return (
          <li key={issue.id}>
            <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
