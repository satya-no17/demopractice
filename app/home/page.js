"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { extractTxt } from "@/lib/extractTxt"

export default function Page() {
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const categories = ["Analgesic", "Antibiotic", "Antidiabetic", "Antacid", "Cholesterol"]
//baad k liye h 




    // const handleImageUpload = async (e) => {
    //     setLoading(true)
    //     try {
    //         const file = e.target.files[0]
    //         const rawText = await extractTxt(file)

    //         const res = await fetch("/api/extract", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ rawText })
    //         })

    //         const { medicineName } = await res.json()
    //         if (medicineName) router.push(`/result?name=${medicineName}`)

    //     } catch (err) {
    //         console.error("Failed:", err)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    const handleSearch = () => {
        if (!query.trim()) return
        router.push(`/result?name=${query.trim()}`)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">

            <h1 className="text-4xl font-bold text-center mb-3">
                Find cheaper alternatives to your medicine
            </h1>
            <p className="text-gray-500 text-center mb-8">
                Search by name, upload a photo, or scan your prescription
            </p>

            <div className="flex items-center gap-2 w-full max-w-xl">
                <input
                    className="flex-1 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search medicine e.g. Crocin, Allegra..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />



                {/* baad me karenge  */}

                {/* <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-3 rounded-lg text-xl">
                    📷
                    <input type="file" accept="image/*" hidden
                        onChange={handleImageUpload} />
                </label> */}

                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg disabled:opacity-50 hover:bg-blue-700"
                >
                    {loading ? "Reading..." : "Search"}
                </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 justify-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => router.push(`/result?category=${cat}`)}
                        className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-sm text-black"
                    >
                        {cat}
                    </button>
                ))}
            </div>

        </div>
    )
}