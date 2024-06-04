import DashboardSkeleton from '@/app/ui/skeletons';

// 整个page页面的loading，但是因为page里面的组件已经使用了组件级的loading，所以此处暂时看不出效果
export default function Loading() {
  return <DashboardSkeleton />;
}
