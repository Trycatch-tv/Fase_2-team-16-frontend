import { useGetLogsQuery } from "@/store/slices/apis";
import { useEffect, useState } from "react";

export const useLogs = () => {
  const [logsData, setLogs] = useState([]);
  const {
    isSuccess: isSuccessLogs,
    isError: isErrorLogs,
    isLoading: isLoandingLogs,
    data: logsBack,
  } = useGetLogsQuery();

  // isFetchingLogs,
  useEffect(() => {
    if (logsBack) {
      setLogs(logsBack.logs);
    }
  }, [logsBack]);

  return { logsData, logsBack, isSuccessLogs, isErrorLogs, isLoandingLogs };
};
