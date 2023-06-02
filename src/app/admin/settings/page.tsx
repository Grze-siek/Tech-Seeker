import CardProfile from '@/components/Card/CardProfile';
import CardSettings from '@/components/Card/CardSettings';

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 px-4">
        <CardSettings />
      </div>
      <div className="w-full lg:w-4/12 px-4">
        <CardProfile />
      </div>
    </div>
  );
}
