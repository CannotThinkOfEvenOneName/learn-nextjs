"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

export default function BreadCrumbDetail({ categoryName, productName }) {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem href={`/products?=categoryName=${categoryName}`}>
          {categoryName}
        </BreadcrumbItem>
        <BreadcrumbItem>{productName}</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
}
