"use client";
import { useState, ChangeEvent } from "react";
import { storage } from "@/firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const FileUpload = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [progress, setProgress] = useState<number[]>([]);
  const [downloadURLs, setDownloadURLs] = useState<string[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = () => {
    if (!files) return;

    const newProgress: number[] = Array.from({ length: files.length }).fill(
      0,
    ) as number[];
    const newDownloadURLs: string[] = [];

    Array.from(files).forEach((file, index) => {
      const storageRef = ref(storage, `hochzeitsfotos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          newProgress[index] = progress;
          setProgress([...newProgress]);
        },
        (error) => {
          console.error("Upload fehlgeschlagen:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            newDownloadURLs.push(downloadURL);
            setDownloadURLs([...newDownloadURLs]);
          });
        },
      );
    });
  };

  return (
    <div className="flex w-full max-w-[600px] flex-col items-center gap-12">
      <div className="flex w-full max-w-[388px] flex-col items-center gap-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          multiple
          className="w-full file:mr-4 file:rounded-full file:border-0 file:bg-darkdusty file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-red-200"
        />
        <button
          className="w-full rounded-lg bg-saturatedgray py-3 text-white"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        {progress.map((prog, index) => (
          <div className="w-full space-y-2" key={index}>
            <p>Upload-Fortschritt Foto {index + 1}</p>
            <progress
              className="w-full [&::-moz-progress-bar]:bg-violet-400 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-darkdusty"
              id="index"
              value={prog}
            />
          </div>
        ))}
        {downloadURLs.map((url, index) => (
          <p key={index} className="w-full break-all">
            Foto {index + 1} abgespeichert unter:{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
