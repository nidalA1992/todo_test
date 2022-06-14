import { TFilter } from "../context/conrolContext";
import { ITodoDataContext } from "../context/dataContext";

const all =  (i:ITodoDataContext) => i;
const completed =  (i:ITodoDataContext) => i.completed;
const active =  (i:ITodoDataContext) => !i.completed;

export const by = (filter:TFilter) => 
  (i:ITodoDataContext) => 
    filter === 'active'    ? active(i) :
    filter === 'completed' ? completed(i) :
    all(i);
