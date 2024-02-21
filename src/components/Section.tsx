import cn from "@/lib/cn";
import { ChildrenProps } from "@/types/common.types";

interface Props extends ChildrenProps {
  className?: string;
  id: string;
  tag: string;
}

const Section = (props: Props) => {
  return (
    <div id={props.id} className={cn("section", props.className || "")}>
      <h1 className="jsx">{`<${props.tag}>`}</h1>
      {props.children}
      <h1 className="jsx">{`</${props.tag}>`}</h1>
    </div>
  );
};

export default Section;
