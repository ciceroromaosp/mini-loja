import React from 'react'; 

export function Skeleton() {
  return (
    <div className="w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded p-4">
      <div className="animate-pulse flex flex-col gap-4">
        <div className="bg-border-light dark:bg-border-dark rounded aspect-square w-full"></div>
        <div className="h-4 bg-border-light dark:bg-border-dark rounded"></div>
        <div className="h-4 bg-border-light dark:bg-border-dark rounded w-3/5"></div>
        <div className="h-4 bg-border-light dark:bg-border-dark rounded w-2/5"></div>
      </div>
    </div>
  );
}