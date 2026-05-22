import { redirect } from 'next/navigation';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const params = await searchParams;
  const qs = new URLSearchParams(
    Object.entries(params).flatMap(([k, v]) =>
      Array.isArray(v) ? v.map((val) => [k, val]) : [[k, v]]
    )
  ).toString();

  redirect(qs ? `/sponsors?${qs}` : '/sponsors');
}
