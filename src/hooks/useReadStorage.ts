// import { useContext, useEffect, useState } from "react";
// import { controlContext } from "../context/conrolContext";
// // import { todoContext } from "../context/todoContext";
// // import { ITodoStorage } from "../context/todosStoreContext";
// import { getStorage } from "../utils/getStorage";

// export function useReadStorage() {
//   const [todos, setTodos] = useState<ITodoStorage[]>([]);
//   const {filter} = useContext(controlContext);

//   useEffect(() => {
//     const todosStore = getStorage();

//     if(todosStore.length) setTodos(todosStore);
    
//   }, []);

//   return [todos]
// }
