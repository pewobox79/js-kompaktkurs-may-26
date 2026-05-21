import Image from "next/image"

export default function GlobalImage({url, alt, size = "large"}:{url: string, alt:string, size?: "small" | "large"}) {

    if(!url) return

    const isLargeImage = size === "large"
    return <div>
        <Image
            className="dark:invert"
            src={url}
            alt={alt || "Mein alt text"}
            width={isLargeImage ? 100: 16}
            height={isLargeImage? 80: 16}
            priority
        />
    </div>
}