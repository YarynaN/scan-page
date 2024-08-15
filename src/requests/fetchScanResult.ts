import { response } from "../fixtures/response";
import { ScanResponse } from "../models/scanResponse";

export const fetchScanResult = async (): Promise<ScanResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};
