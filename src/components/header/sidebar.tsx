import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookOpen, Menu, SquareTerminal } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Icons } from "../icons";

const navigation = [
  {
    title: "Developers",
    url: "#",
    icon: SquareTerminal,
    isActive: false,
    items: [
      {
        title: "Solo Developers",
        url: "#",
      },
      {
        title: "Team Developers",
        url: "#",
      },
      {
        title: "Organisations",
        url: "#",
      },
    ],
  },
  {
    title: "Explore",
    url: "#",
    icon: SquareTerminal,
    isActive: false,
    items: [
      {
        title: "Roadmaps",
        url: "#",
      },
      {
        title: "UI Designs",
        url: "#",
      },
      {
        title: "Code Templates",
        url: "#",
      },
      {
        title: "Jobs",
        url: "#",
      },
    ],
  },
];

export default function SideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="sr-only">Open main menu</span>
        <Menu
          aria-hidden="true"
          className="h-5 w-5 text-zinc-700 hover:text-zinc-900 dark:text-white/80 dark:hover:text-white"
        />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <div>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center gap-2 rounded-md border border-zinc-200 px-2 py-3 text-sm group-data-[state=open]/collapsible:bg-zinc-200 dark:border-white/20 dark:group-data-[state=open]/collapsible:bg-white/20">
                    {item.icon && <item.icon className="size-4" />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 border-l border-zinc-200 pl-4 dark:border-white/20">
                  {item.items?.map((subItem) => (
                    <Link
                      className="block py-3 text-sm"
                      key={subItem.title}
                      href={subItem.url}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
          <div className="w-full rounded-md border border-zinc-200 px-2 py-3 text-sm dark:border-white/20">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="size-4" />
              <span>Blog</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="block w-full rounded-md border border-zinc-200 px-4 py-2 text-center dark:border-white/20"
              >
                Read
              </Link>
              <Link
                // href="/studio" temporarily disabled go directly to github
                href="https://github.com/zimdevlabs/zimdevelopers.com/tree/main/src/content/blog"
                className="block w-full rounded-md bg-zinc-900 px-4 py-2 text-center text-white dark:bg-primaryColor"
              >
                Write
              </Link>
            </div>
          </div>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md border border-zinc-200 bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md dark:border-white/20"
            href="#"
          >
            <Icons.logo className="h-6 w-6" />
            <div className="relative mb-2 mt-4 w-fit text-lg font-medium">
              Dev Teams
              <span className="absolute -right-5 -top-4 block rounded-full bg-violet-600 px-2 text-xs text-white">
                new
              </span>
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
              No need to work alone create or join a team of developers you can
              collaborate with
            </p>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
