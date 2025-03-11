import { useState } from "react";

interface Props{
  children: string;
}

const ExpandableText = ({ children  }:Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <>{children}</>;
  const summary = expanded ? children : children.substring(0, limit)+'...';
  return (
    <p>
      {summary}
      <button className="bg-yellow-200 ms-1 font-bold px-2 py-1 rounded-md " onClick={() => setExpanded(!expanded)}>
        {!expanded ? "Show More" : "Show Less"}
      </button>
    </p>
  );
};

export default ExpandableText;
