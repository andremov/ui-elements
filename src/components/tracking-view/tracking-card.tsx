'use client';

import { Temporal } from '@js-temporal/polyfill';
import clsx from 'clsx';
import map from '../../stories/assets/map-view.png';
import { LucideInfo, LucideMapPin, LucidePackage } from 'lucide-react';

type TrackingCardProps = {
  address: string;
  ETA: Temporal.PlainDateTime;
  containerCount: number;
  containerWeight: number;
  trackingNumber: string;
  deliveryStatus: string;
  deliveryDriver: string;
  deliveryID: string;
  viewType: 'compact' | 'expanded';
};

export function TrackingCard(props: TrackingCardProps) {
  const {
    address,
    ETA,
    containerCount,
    containerWeight,
    deliveryDriver,
    deliveryID,
    trackingNumber,
    viewType,
  } = props;

  return (
    <div className={'flex rounded-xl shadow-xl bg-white p-4 gap-4 text-black'}>
      <div className="flex-1 flex flex-col h-full gap-1.5">
        <div className="flex gap-2 mb-2 items-center">
          <div className="text-base font-semibold">#{deliveryID}</div>
          <div className="bg-gray-100 rounded-full text-xs py-0.5 px-2.5 text-gray-400">
            {deliveryDriver}
          </div>
        </div>

        <div className="flex gap-2 text-sm ">
          <LucideMapPin size={18} color="#ccc" />
          <span className="text-gray-400">{address}</span>
        </div>
        <div className={clsx(['flex gap-2 text-sm', { hidden: viewType === 'compact' }])}>
          <LucidePackage size={18} color="#ccc" />
          <span className="text-gray-400">
            {containerCount} containers, {containerWeight} kg
          </span>
        </div>
        <div className={clsx(['flex gap-2 text-sm ', { hidden: viewType === 'compact' }])}>
          <LucideInfo size={18} color="#ccc" />
          <span className="text-gray-400">Tracking ID: {trackingNumber}</span>
        </div>

        <div className="text-sm text-gray-500 flex gap-2 bg-gray-100 w-fit rounded-full px-2.5 py-0.5">
          <span className="text-gray-300 font-semibold">ETA</span>
          <span>{ETA.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>{' '}
        </div>
      </div>

      <div
        className={clsx([
          'flex rounded-md overflow-hidden',
          { 'h-[150px]': viewType === 'expanded', 'h-[100px]': viewType === 'compact' },
        ])}
      >
        <img src={map} />
      </div>
    </div>
  );
}
