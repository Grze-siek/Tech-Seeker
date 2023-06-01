import MapsExample from '@/components/Maps/MapsExample';
import React from 'react';

type Props = {};

export default function maps({}: Props) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <MapsExample />
        </div>
      </div>
    </div>
  );
}
