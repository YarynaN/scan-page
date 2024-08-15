import { useCallback, useState } from "react";
import { fetchScanResult } from "../requests/fetchScanResult";
import {
  buildTreeFromResponse,
  recalculateIssuesCount,
} from "../services/buildTreeFromResponse";
import { PageNode } from "../models/scan";

export type ScanResultType = {
  rootNode: PageNode | null;
  isLoading: boolean;
  fetchGroupedScans: () => Promise<void>;
};

export const useScanContext = (): ScanResultType => {
  const [rootNode, setRootNode] = useState<PageNode | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchGroupedScans = useCallback(async () => {
    setIsLoading(true);
    try {
      const scanResponse = await fetchScanResult();
      const root = buildTreeFromResponse(scanResponse);
      recalculateIssuesCount(root);
      setRootNode(root);
    } catch (e: unknown) {
      const { message } = e as Error;

      console.log(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    rootNode,
    isLoading,
    fetchGroupedScans,
  };
};
