import {
  Box,
  Chip,
  Collapse,
  IconButton,
  Link,
  TableCell,
  TableRow,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { IssueForPage } from "../../models/scan";
import { FC, useState } from "react";

type Props = {
  issue: IssueForPage;
};

export const IssueRow: FC<Props> = ({ issue }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        key={issue.url}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <IconButton
            aria-label="expand issue row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Link color="secondary.dark" href={issue.url} target="_blank">
            {issue.url}
          </Link>
        </TableCell>
        <TableCell align="left">{issue.type}</TableCell>
        <TableCell align="left">{issue.component}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Chip
                label={issue.selector}
                color="error"
                variant="outlined"
                aria-live="assertive"
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
