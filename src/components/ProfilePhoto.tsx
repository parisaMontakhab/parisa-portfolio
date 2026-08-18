import Image from "next/image";

type ProfilePhotoProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export function ProfilePhoto({
  src = "/images/parisa-profile.png",
  alt = "Parisa Montakhabisani, Junior Full-Stack Developer",
  className = "",
}: ProfilePhotoProps) {
  return (
    <div className={`flex justify-center lg:justify-start ${className}`}>
      <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-xl border border-border sm:h-72 sm:w-72">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 256px, 288px"
        />
      </div>
    </div>
  );
}
