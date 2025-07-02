interface CardProps {
  /**
   * Background for the card
   */
  backgroundColor?:
    | 'bg-emerald-300'
    | 'bg-blue-300'
    | 'bg-amber-300'
    | 'bg-purple-300'
    | 'bg-green-300'
    | 'bg-teal-300';
  /**
   * Name of the category
   */
  categoryName?: string;
  /**
   * Title for the card
   */
  cardTitle?: string;
}

/**
 * Primary UI component for user interaction
 */

export function BorderedCard({
  backgroundColor = 'bg-emerald-300',
  categoryName = 'Category Name',
  cardTitle = 'Card Title',
}: CardProps) {
  return (
    <div className="relative m-4 h-52 w-80 rounded-lg bg-white p-1 shadow-lg transition">
      <div
        className={`flex h-full w-full flex-col items-center justify-around gap-2 rounded-md py-10 p-4 text-center text-slate-800 ${backgroundColor}`}
      >
        <p></p>
        <h4 className="text-3xl font-semibold">{cardTitle}</h4>
        <p className={`bg-black/20 rounded-md px-2 py-1 text-white`}>{categoryName}</p>
      </div>
    </div>
  );
}
