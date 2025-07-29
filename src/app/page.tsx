import { Button } from "@/components/ui/button"

export default async function Home() {
  let data = await fetch('http://localhost:3000/products')
  let posts = await data.json()
  return (
    <div>
      <Button>Teste</Button>
    </div>
  )
}