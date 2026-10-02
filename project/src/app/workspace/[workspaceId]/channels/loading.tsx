import { HeadingSkeleton, PageSkeleton, TableSkeleton } from "@/components/shared/page-skeletons"

export default function Loading() {
  return (
    <PageSkeleton>
      <HeadingSkeleton />
      <TableSkeleton columns={4} rows={3} />
    </PageSkeleton>
  )
}
