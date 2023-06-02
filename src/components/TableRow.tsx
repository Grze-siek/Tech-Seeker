'use client';
import { MdPlace } from 'react-icons/md';
import { useRouter } from 'next/navigation';

type Props = {
  job: {
    slug: string;
    title: string;
    company: string;
    place: string;
    salary: string;
    isRemote: boolean;
    stack: string[];
  };
  color: string;
};

export default function TableRow({ job, color }: Props) {
  const router = useRouter();
  return (
    <tr
      className="hover:bg-slate-800 transition duration-200 ease-in-out cursor-pointer"
      onClick={() => router.push(`/job/${job.slug}`)}
    >
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          src="/img/bootstrap.jpg"
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
        ></img>{' '}
        <div className="flex-col">
          <div
            className={
              'ml-3 font-semibold' +
              +(color === 'light' ? 'text-blueGray-600' : 'text-white')
            }
          >
            <span className="text-xl">{job.title}</span>
          </div>
          <div
            className={
              'ml-3 font-bold ' +
              +(color === 'light' ? 'text-blueGray-600' : 'text-white')
            }
          >
            <span className="text-gray-600">{job.company}</span>
          </div>
        </div>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="border-2 border-gray-600">
          <p className="px-4 py-2 uppercase text-center">{job.salary}</p>
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
        {job.isRemote ? (
          'Remote'
        ) : (
          <div className="flex items-center space-x-2">
            <MdPlace /> <span>{job.place}</span>
          </div>
        )}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex space-x-2">
          {job.stack.map((skill: string) => (
            <div className="border-2 border-gray-600">
              <p className="px-4 py-2 uppercase">{skill}</p>
            </div>
          ))}
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"></td>
    </tr>
  );
}
