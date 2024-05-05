import PhotoFrame from "./PhotoFrame";
import Header from "./Header";

export default function Home() {
  return (
    <main className="grid grid-rows-layout h-screen bg-neutral-100">
      <Header>
        Welcome to Gallery
      </Header>
      <section className="px-4">
        <div className="px-2 flex justify-start flex-wrap gap-4">
          <PhotoFrame />
        </div>
      </section>
    </main>
  );
}
