'use client';
import jobOffers from '@/jobs';
import Link from 'next/link';

export default function Page({ params }: { params: { slug: string } }) {
  const jobData = jobOffers.filter((job) => job.slug === params.slug)[0];
  console.log('jobData: ', jobData);
  return (
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full  px-4 ">
                <div className="flex justify-start py-4 lg:pt-4 pt-8">
                  <Link href={'/'}>
                    <div className="border-2 border-gray-600 cursor-pointer hover:opacity-80">
                      <p className="px-4 py-2 text-xs uppercase text-center">
                        {' '}
                        Back to the offers
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                {jobData.title}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{' '}
                {jobData.company}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                {jobData.isRemote ? 'Fully Remote' : jobData.place}
              </div>
              <div className="mb-2 text-blueGray-600 font-bold">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                {jobData.salary} PLN
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {jobData.description}
                  </p>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-lg px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
