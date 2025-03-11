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
    <p className="text-lg mt-1">
      {summary}
      <button className="bg-amber-200 text-base ms-1 font-semibold px-2  rounded-md text-black " onClick={() => setExpanded(!expanded)}>
        {!expanded ? "Read More" : "Show Less"}
      </button>
    </p>
  );
};

export default ExpandableText;
