import Image from "next/image";
import React, { FC } from "react";

interface IBlogImageProps {
	src: string;
	alt: string;
}

const BlogImage: FC<IBlogImageProps> = ({ alt, src }) => {
	return <Image src={src} alt={alt} width={1200} height={630} />;
};

export default BlogImage;
