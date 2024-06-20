import FileUpload from "@/components/FileUpload";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Upload() {
  return (
    <main className="relative flex flex-col items-center gap-12 overflow-hidden px-5 py-8 font-lato md:py-12">
      <Link href="/" className="group flex gap-1">
        <ArrowLeft className="transition-all group-hover:-translate-x-2" />
        <span>Zurück</span>
      </Link>
      <h1 className="text-center text-2xl font-bold">Fotos hochladen</h1>
      <FileUpload />
    </main>
  );
}
