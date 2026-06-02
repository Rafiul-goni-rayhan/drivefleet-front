// app/dashboard/loading.js

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full gap-4">
      {/* CSS Spinner */}
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>

      <p className="text-gray-500 font-medium animate-pulse">
        Loading......
      </p>
    </div>
  );
}