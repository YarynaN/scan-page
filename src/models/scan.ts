import { Issue, Url } from "./scanResponse";

export type PageNode = {
  id?: string;
  url: Url;
  children: Record<string, PageNode>;
  issues: Issue[];
  childIssuesCount: number;
};

export type IssueForPage = Issue & {
  url: Url;
};
