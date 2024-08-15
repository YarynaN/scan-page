export type Url = string;
export type ScanResponse = Record<Url, Issue[]>;

export type Severity = "Critical" | "Warning" | "Error"; //mode to constants/literals
export type IssueType = "Accessible Name" | "Interactive Role"; //mode to constants/literals

export type Issue = {
  type: IssueType;
  severity: Severity;
  component: string;
  selector: string;
};
