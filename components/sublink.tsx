import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  isSheet,
  tag,
  customStyles = "",
  collapsible,
  externalLink,
}: EachRoute & { level: number; isSheet: boolean; customStyles?: string }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(level == 0);

  useEffect(() => {
    if (path == href || path.includes(href)) setIsOpen(true);
  }, [href, path]);

  const linkStyles = "text-sm font-normal";

  // 处理外部链接
  const ExternalComp = externalLink ? (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn(
        "hover:text-primary hover:underline", 
        customStyles || linkStyles
      )}
    >
      {title} <span className="text-xs">↗</span>
      {tag && (
        <span className="dark:bg-blue-700 bg-blue-500 rounded-md px-1.5 py-0.5 mx-2 text-xs text-white !font-normal">
          {tag}
        </span>
      )}
    </a>
  ) : null;

  const Comp = (
    <Anchor
      activeClassName="text-primary dark:font-medium font-semibold"
      href={href}
      className={customStyles || linkStyles}
    >
      {title}
      {tag && (
        <span className="dark:bg-blue-700 bg-blue-500 rounded-md px-1.5 py-0.5 mx-2 text-xs text-white !font-normal">
          {tag}
        </span>
      )}
    </Anchor>
  );

  const titleOrLink = externalLink ? ExternalComp : (!noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h4 className="text-sm font-medium text-primary">
      {title}
      {tag && (
        <span className="dark:bg-blue-700 bg-blue-500 rounded-md px-1.5 py-0.5 mx-2 text-xs text-white !font-normal">
          {tag}
        </span>
      )}
    </h4>
  ));

  if (!items) {
    return <div className="flex flex-col">{titleOrLink}</div>;
  }

  if (!collapsible) {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="w-full pr-5">
          <div className="flex items-center justify-between w-full">
            <span className="w-[95%] overflow-hidden text-ellipsis text-start">
              {titleOrLink}
            </span>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col items-start text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",
            level > 0 && "pl-4 border-l ml-1.5"
          )}
        >
          {items?.map((innerLink) => {
            const modifiedItems = {
              ...innerLink,
              href: innerLink.externalLink ? innerLink.href : `${href + innerLink.href}`,
              level: level + 1,
              isSheet,
              collapsible: innerLink.collapsible,
              externalLink: innerLink.externalLink,
            };
            return <SubLink key={modifiedItems.href} {...modifiedItems} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full pr-5">
          <div className="flex items-center justify-between cursor-pointer w-full">
            <span className="w-[95%] overflow-hidden text-ellipsis text-start">
              {titleOrLink}
            </span>
            <span className="sm:ml-0 -mr-1.5">
              {!isOpen ? (
                <ChevronRight className="h-[0.9rem] w-[0.9rem]" />
              ) : (
                <ChevronDown className="h-[0.9rem] w-[0.9rem]" />
              )}
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            className={cn(
              "flex flex-col items-start text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",
              level > 0 && "pl-4 border-l ml-1.5"
            )}
          >
            {items?.map((innerLink) => {
              const modifiedItems = {
                ...innerLink,
                href: innerLink.externalLink ? innerLink.href : `${href + innerLink.href}`,
                level: level + 1,
                isSheet,
                collapsible: innerLink.collapsible,
                externalLink: innerLink.externalLink,
              };
              return <SubLink key={modifiedItems.href} {...modifiedItems} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
