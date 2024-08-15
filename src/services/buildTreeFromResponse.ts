import { IssueForPage, PageNode } from "../models/scan";
import { ScanResponse } from "../models/scanResponse";

export const buildTreeFromResponse = (data: ScanResponse) => {
  const root: PageNode = {
    children: {},
    issues: [],
    url: "https:/",
    childIssuesCount: 0,
  };

  for (const pageUrl in data) {
    const path = pageUrl.match(/\/[^/]+/g);
    let currentNode = root;

    path?.forEach((e) => {
      const pathItem = e.slice(1);

      let child = currentNode.children[pathItem];

      if (!child) {
        child = {
          url: `${currentNode.url}/${pathItem}`,
          id: pathItem,
          children: {},
          issues: [],
          childIssuesCount: 0,
        };
        currentNode.children[pathItem] = child;
      }

      currentNode = child;
    });

    const issues = data[pageUrl];
    currentNode.issues = [...issues];
  }

  return root;
};

export const recalculateIssuesCount = (node: PageNode) => {
  node.childIssuesCount = node.issues.length;
  for (const name in node.children) {
    const subNode = node.children[name];
    node.childIssuesCount += recalculateIssuesCount(subNode);
  }
  return node.childIssuesCount;
};

export const getAllIssues = (node: PageNode) => {
  let result: IssueForPage[] = node.issues.map((i) => ({
    ...i,
    url: node.url,
  }));
  for (const name in node.children) {
    const subNode = node.children[name];
    result = [...result, ...getAllIssues(subNode)];
  }
  return result;
};
