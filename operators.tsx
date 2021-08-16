export interface IOperators {
   operator: string
   path: string
   picture: string
   color: string
 }

export const operators:IOperators[] = [
   {operator: 'MTC', path: 'mts', picture: 'mtc.webp', color: '#CC061A'},
   {operator: 'Мегафон', path: 'megafon', picture: 'megafon.webp', color: '#00985F'},
   {operator: 'Билайн', path: 'beeline', picture: 'beeline.webp', color: '#F3E158'},
 ]