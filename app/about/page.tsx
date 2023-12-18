import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About Page', 'Leonardo', 'Información', '...']
}

export default function AboutPagge() {
	return (
		<>
			<span className="text-7xl">About Page</span>
		</>
	);
}
