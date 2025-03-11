import { ReactNode } from "react";


interface Props{
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({term,children}:Props) => {
  return (
    <div className="my-4">
      <dt className="text-2xl text-stone-500 font-bold">{term}</dt>
      <dd className="text-xl">{children}</dd>
    </div>
  )
}

export default DefinitionItem