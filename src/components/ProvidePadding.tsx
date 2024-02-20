import cn from "@/lib/cn";
import { ChildrenProps } from "@/types/common.types";

interface Props extends ChildrenProps {
  className?: string;
}

const ProvidePadding = (props: Props) => {
  return (
    <section className={cn("provide_padding", props.className || "")}>
      {props.children}
    </section>
  );
};

export default ProvidePadding;
