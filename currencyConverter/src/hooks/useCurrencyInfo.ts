import axios from "axios";

import { useState, useEffect } from "react";

const useCurrencyInfo = (currency: string):Record<string, number>|null => {
  const [cData,setCData]=useState<Record<string, number>|null>({});
    if(!currency){
        return null;
    }
  useEffect(() => {
    const getData = async () => {
        const res = await axios.get(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        );
    
        setCData(res.data[currency]);
      }
      
      getData()
  },[currency]);

  return cData;
};

export default useCurrencyInfo;
