import cn from "@/lib/cn";
import { ChildrenProps } from "@/types/common.types";

interface Props extends ChildrenProps {
  className?: string;
  id: string;
}

const Section = (props: Props) => {
  return (
    <div id={props.id} className={cn("section", props.className || "")}>
      {props.children}
    </div>
  );
};

export default Section;
