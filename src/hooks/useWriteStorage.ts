// import { useContext, useEffect, useState } from "react";
// import { controlContext } from "../context/conrolContext";
// import { getStorage } from "../utils/getStorage";
// import { setStorage } from "../utils/setStorage";

// export function useWriteStorage () {
//   const [result, setResult] = useState<ITodoStorage[]>([])
//   const { value } = useContext(todoContext);

//   useEffect(() => {
//     if(!value.value) return;

//     const result = getStorage().concat(value);

//     setStorage(result);
//     setResult(result);

//   }, [value]);
  
//   return [result];
// }
