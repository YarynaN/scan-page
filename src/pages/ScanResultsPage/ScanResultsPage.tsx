import { FC, useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { Tree, Table } from "../../components";
import { IssueForPage, PageNode } from "../../models/scan";
import { getAllIssues } from "../../services/buildTreeFromResponse";
import { useScanContext } from "../../hooks/useScanResults";

export const ScanResultsPage: FC = () => {
  const [tableItems, setTableItems] = useState<IssueForPage[]>([]);

  const { fetchGroupedScans, isLoading, rootNode } = useScanContext();

  useEffect(() => {
    fetchGroupedScans();
  }, [fetchGroupedScans]);

  if (isLoading || !rootNode) {
    return <CircularProgress />;
  }

  const onNodeChange = (node: PageNode) => {
    const itemsToDisplay = getAllIssues(node);
    setTableItems(itemsToDisplay);
  };

  return (
    <Box sx={{ flex: 1, padding: 4, overflowY: "hidden" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Tree root={rootNode} onNodeChange={onNodeChange} />
        </Grid>
        <Grid item xs={8}>
          <Table issues={tableItems} />
        </Grid>
      </Grid>
    </Box>
  );
};
