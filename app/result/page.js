import Result from '@/components/result'
import { supabase } from '@/lib/supabase'

const page = async ({ searchParams }) => {


  const params = await searchParams
  const name = params.name
  const category = params.category
  let data = []
  let alternative = []

  if (name) {
    const { data: medicines } = await supabase
      .from('medicines')
      .select('*')
      .or(`name.ilike.%${name}%,generic_name.ilike.%${name}%`)
    data = medicines || []
  }
  if (data.length > 0) {
    const { data: alts } = await supabase
      .from('medicines')
      .select('*')
      .eq('active_ingredient', data[0].active_ingredient)
      .neq('id', data[0].id)  // exclude the searched medicine itself
      .order('price_inr', { ascending: true })

    alternative = alts || []
  }


if (category) {
  const { data: medicines } = await supabase
    .from('medicines')
    .select('*')
    .eq('category', category)

  data = medicines || []

}

return (
  <div>
    <Result data={data} alternative={alternative} name={name} category={category} />
  </div>
)
}


export default page
