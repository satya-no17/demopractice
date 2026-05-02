import { supabase } from '@/lib/supabase'
import Link from 'next/link'

const page = async ({ params }) => {
  const { id } = await params

  const { data: medicine } = await supabase
    .from('medicines')
    .select('*')
    .eq('id', id)
    .single()

  // check immediately after — before any other query
  if (!medicine) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-5xl mb-4">💊</p>
        <h2 className="text-2xl font-bold mb-2">Medicine not found</h2>
        <Link href="/" className="text-blue-500 mt-4 block">← Go back home</Link>
      </div>
    )
  }

  // only runs if medicine exists
  const { data: pharmacies } = await supabase
    .from('inventory')
    .select('*, pharmacies(*)')
    .eq('medicine_id', id)
    .eq('in_stock', true)
    .order('local_price', { ascending: true })

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">

      <Link href="javascript:history.back()" className="text-blue-500 text-sm mb-6 block">← Back</Link>

      <div className="border rounded-xl p-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-1">{medicine.name}</h1>
            <p className="text-gray-500">{medicine.active_ingredient}</p>
            <p className="text-gray-400 text-sm">{medicine.manufacturer} · {medicine.category}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-600">₹{medicine.price_inr}</p>
            {medicine.is_generic && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Generic</span>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4">📍 Available At</h2>

      {!pharmacies || pharmacies.length === 0 ? (
        <p className="text-gray-400">No pharmacies found with this medicine in stock.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {pharmacies.map((p) => (
            <div key={p.id} className="border rounded-xl p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">{p.pharmacies.name}</p>
                <p className="text-sm text-gray-500">{p.pharmacies.address}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-green-600">₹{Math.round(p.local_price)}</p>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">In Stock</span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default page