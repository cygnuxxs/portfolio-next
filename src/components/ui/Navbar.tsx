import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const Navbar = () => {
  return (
    <NavigationMenu className="max-w-none h-[8rem] flex">
      <NavigationMenuList className="w-screen px-8 flex items-center justify-between">
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-3xl font-semibold"
              )}
            >
              Cygnuxxs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <div className="flex gap-6 pr-6">
          <NavigationMenuItem>
            <Link href={"#skills"} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-md font-normal"
                )}
              >
                My Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"#projects"} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-md font-normal"
                )}
              >
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"#about"} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-md font-normal"
                )}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"#contact"} legacyBehavior passHref>
              <Button className="px-8 py-5 rounded-none border-black" asChild variant={"outline"}>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'font-normal text-md')}>
                  Find Me
                </NavigationMenuLink>
              </Button>
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
