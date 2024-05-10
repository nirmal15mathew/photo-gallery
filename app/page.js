import Header from "./components/Header";
import Link from "next/link";
import { GallerySection } from "./components/GallerySection";

export default function Home() {
  return (
    <main className="grid grid-rows-layout min-h-screen bg-neutral-100">
      <Header>
        Welcome to Gallery
      </Header>
      <GallerySection> </GallerySection>
      <Link href="/upload">Upload</Link>
    </main>
  );
}
