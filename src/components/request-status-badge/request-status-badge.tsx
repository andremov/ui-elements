import clsx from 'clsx';
import { Loader2, XCircle, Check } from 'lucide-react';

type RequestStatusBadgeProps = {
  currentStatus: RequestStatus;
  processingText?: string;
};

export enum RequestStatus {
  none = 1,
  ready = 5,
  processing = 2,
  error = 3,
  success = 4,
}

export function RequestStatusBadge(props: RequestStatusBadgeProps) {
  const { currentStatus, processingText } = props;

  return (
    <div
      className={clsx('rounded-md border h-10 border-black/30 flex p-2 gap-2 text-white', {
        'opacity-0': currentStatus === RequestStatus.none,
        'opacity-100 bg-red-500': currentStatus === RequestStatus.error,
        'opacity-100 bg-emerald-500': currentStatus === RequestStatus.success,
        'opacity-100 bg-blue-400': currentStatus === RequestStatus.processing,
      })}
    >
      {currentStatus === RequestStatus.processing && (
        <>
          <Loader2 className="animate-spin" />
          <span>{processingText ?? 'Processing'}...</span>
        </>
      )}
      {currentStatus === RequestStatus.error && (
        <>
          <XCircle />
          <span>Error</span>
        </>
      )}
      {currentStatus === RequestStatus.success && (
        <>
          <Check />
          <span>Success</span>
        </>
      )}
    </div>
  );
}
