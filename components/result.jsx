import React from 'react'
import Link from 'next/link'

const Result = ({ data, name, category, alternative }) => {
  const searchLabel = name || category || 'your search'

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-gray-500 text-lg text-center">
          No medicines found for &quot;{searchLabel}&quot;
        </p>
      </div>
    )
  }

  return (



    // EDITTTTTTTTT




    
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-1">
        Results for &quot;{searchLabel}&quot;
      </h2>
      <p className="text-gray-500 mb-8">{data.length} medicines found</p>

      {/* 🔹 MAIN RESULTS */}
      <div className="flex flex-col gap-4 mb-10">
        {data.map((med) => (
          <Link href={`/medicine/${med.id}`} key={med.id}>
            <div key={med.id} className="border rounded-xl p-5 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{med.name}</h3>
                  {med.is_generic && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      Generic
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{med.active_ingredient}</p>
                <p className="text-sm text-gray-400">
                  {med.manufacturer} | {med.category}
                </p>
              </div>

              <div className="text-right shrink-0">
                <p className="text-2xl font-bold text-blue-600">
                  Rs. {med.price_inr}
                </p>
                <p className="text-xs text-gray-400">per strip</p>
              </div>
            </div>     </Link>
        ))}
      </div>


      {/* 🔥 ALTERNATIVES SECTION */}
      {alternative && alternative.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Alternatives
          </h3>

          <div className="flex flex-col gap-4">
            {alternative.map((med) => (
              <Link href={`/medicine/${med.id}`} key={med.id}>
                <div key={med.id} className="border rounded-xl p-5 flex items-center justify-between gap-4 bg-gray-50">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-black">{med.name}</h3>
                      {med.is_generic && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          Generic
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{med.active_ingredient}</p>
                    <p className="text-sm text-gray-400">
                      {med.manufacturer} | {med.category}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-2xl font-bold text-green-600">
                      Rs. {med.price_inr}
                    </p>
                    <p className="text-xs text-gray-400">per strip</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Result