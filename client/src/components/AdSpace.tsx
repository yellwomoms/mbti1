// Google AdSense placeholder component
export function AdSpace({ 
  slot, 
  className = "",
  style = "display"
}: { 
  slot?: string;
  className?: string;
  style?: "display" | "infeed" | "multiplex";
}) {
  return (
    <div className={`ad-space ${className}`}>
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          광고 영역 ({style})
        </p>
        {slot && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Slot: {slot}
          </p>
        )}
      </div>
    </div>
  );
}

// Real AdSense component for production
export function GoogleAdSense({ 
  slot, 
  className = "",
  style = "display"
}: { 
  slot: string;
  className?: string;
  style?: "display" | "infeed" | "multiplex";
}) {
  return (
    <div className={`google-ad ${className}`}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={slot}
        data-ad-format={style === "display" ? "auto" : style}
        data-full-width-responsive="true"
      />
    </div>
  );
}