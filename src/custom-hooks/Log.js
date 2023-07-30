import { useGetLogsQuery } from "@/store/slices/apis";
import { useEffect, useState } from "react";

export const useLogs = () => {
  const [logsData, setLogs] = useState([]);
  const {
    isSuccessLogs,
    isErrorLogs,
    isFetchingLogs,
    data: logsBack,
  } = useGetLogsQuery();

  useEffect(() => {
    if (logsBack) {
      setLogs(logsBack.logs);
    }
  }, [logsBack]);

  return { logsData, logsBack, isSuccessLogs, isErrorLogs, isFetchingLogs };
};
