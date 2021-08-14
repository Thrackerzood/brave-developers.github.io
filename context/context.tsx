import React from "react";
import { IOperators, operators } from "../operators/operators";


export const Context
:React.Context<{
operators: IOperators[];
}>
= React.createContext({ operators })