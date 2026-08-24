export default function StarRating({
  rating,
  reviewCount,
  size = 14,
}: {
  rating: number;
  reviewCount?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5`}>
      <div className="flex" role="img" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(rating);
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={filled ? "#B8892B" : "none"}
              stroke="#B8892B"
              strokeWidth="1.5"
            >
              <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.5l-5.9 3.1 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
            </svg>
          );
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-charcoal/50">({reviewCount})</span>
      )}
    </div>
  );
}
