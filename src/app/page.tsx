import CardTable from '@/components/Card/CardTable';
import HeaderStats from '@/components/Header/HeaderStats';
import jobOffers from '../jobs.js';

type JobOffer = {
  slug: string;
  title: string;
  company: string;
  place: string;
  salary: string;
  isRemote: boolean;
  stack: string[];
  description: string;
  category: string;
};

export default function Jobs() {
  const allJobOffers: JobOffer[] = jobOffers;

  // Create an object that contains arrays for each category
  const categories: { [category: string]: JobOffer[] } = {
    frontend: [],
    backend: [],
    fullstack: [],
    mobile: [],
    testing: [],
    devops: [],
  };

  // Categorize job offers based on their category
  allJobOffers.forEach((job) => {
    const category = job.category;
    if (categories[category]) {
      categories[category].push(job);
    }
  });

  return (
    <>
      <HeaderStats />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {Object.entries(categories).map(([category, jobOffers]) => (
            <CardTable
              key={category}
              category={category}
              jobOffers={jobOffers}
              color="dark"
            />
          ))}
        </div>
      </div>
    </>
  );
}
