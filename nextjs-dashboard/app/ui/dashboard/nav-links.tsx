"use client"; // 이 파일과 이 파일이 import하는 것들을 서버 컴포넌트가 아니라 클라이언트 컴포넌트로 렌더링하겠다는 뜻
// # 서버 컴포넌트
// ## 서버에서만 실행, HTML만 브라우저로 전송, useState/useEffect, usePathname과 같은 React 훅이나 이벤트 핸들러onclick 등 사용불가, 브라우저 JS 번들 용량에 포함 안됨(가벼움)

// # 클라이언트 컴포넌트
// ## 브라우저에서도 실행되는 컴포넌트가 됨, 훅/이벤트 핸들러/브라우저 API 사용 가능, 대신 JS 번들에 포함되어 클라이언트로 전송됨

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {name: "Home", href: "/dashboard", icon: HomeIcon},
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
