import {
  CardContent,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { PageNode } from "../../models/scan";
import { FC, useEffect, useState } from "react";
import { useTreeViewApiRef } from "@mui/x-tree-view/hooks";

type Props = {
  root: PageNode;
  onNodeChange?: (node: PageNode) => void;
};

type TreeNode = {
  id: string;
  label: string;
  children: TreeNode[];
  pageNode: PageNode;
};

const buildTreeFromModel = (pageNode: PageNode, totalIssue: number) => {
  const percent = pageNode.childIssuesCount / totalIssue;
  const formattedPercent =
    percent > 0 && percent < 0.01
      ? "<1%"
      : Number(percent).toLocaleString(undefined, { style: "percent" });

  const treeNode: TreeNode = {
    id: pageNode.id || "root",
    label: `${pageNode.id || "root"} ${formattedPercent}`,
    children: Object.values(pageNode.children).map((s) =>
      buildTreeFromModel(s, totalIssue),
    ),
    pageNode: pageNode,
  };
  return treeNode;
};

export const Tree: FC<Props> = ({ root, onNodeChange }) => {
  const apiRef = useTreeViewApiRef();
  const [tree, setTree] = useState<TreeNode | null>(null);

  useEffect(() => {
    const treeNode = buildTreeFromModel(root, root.childIssuesCount);
    setTree(treeNode);
  }, [root]);

  const itemClick = (itemId: string | null) => {
    // @ts-ignore
    const item = apiRef.current!.getItem(itemId);
    onNodeChange && onNodeChange(item.pageNode);
  };

  if (!tree) {
    return <CircularProgress />;
  }

  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom component="h2">
          Site Tree
        </Typography>
        <RichTreeView
          sx={{
            ".MuiTreeItem-content.Mui-selected": {
              border: "1px solid #36454F",
            },
          }}
          items={[tree]}
          apiRef={apiRef}
          onSelectedItemsChange={(_, itemId) => itemClick(itemId)}
        />
      </CardContent>
    </Paper>
  );
};
