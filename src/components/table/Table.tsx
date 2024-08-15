import { IssueForPage } from "../../models/scan";
import { FC, useEffect, useState } from "react";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TextField,
  Box,
} from "@mui/material";
import { IssueRow } from "./TableRow";

type Props = {
  issues: IssueForPage[];
};

export const IssuesTable: FC<Props> = ({ issues }) => {
  const [search, setSearch] = useState<string>("");
  const [tableItems, setTableItems] = useState(issues);

  useEffect(() => {
    setTableItems(issues);
  }, [issues]);

  const filterItems = (search: string) => {
    const filteredItems = issues.filter((item) => item.url.includes(search));
    setTableItems(filteredItems);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ width: "100%", padding: 2 }}>
        <TextField
          sx={{ width: 360 }}
          type="text"
          label="Search by Url"
          variant="outlined"
          color="secondary"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            filterItems(e.target.value);
          }}
        />
      </Box>
      <TableContainer style={{ height: 500, width: "100%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="Issues found" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Action</TableCell>
              <TableCell align="left">Url</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Component</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableItems.map((issue) => (
              <IssueRow issue={issue} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
