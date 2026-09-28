export default async function Item({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <p>item {slug}</p>
}
