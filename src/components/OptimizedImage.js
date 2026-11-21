const rasterSource = /\.(?:png|jpe?g)$/i;

export function optimizedImageSrc(src) {
  return rasterSource.test(src) ? src.replace(rasterSource, ".webp") : src;
}

export default function OptimizedImage({ src, alt, ...props }) {
  const webpSrc = optimizedImageSrc(src);

  if (webpSrc === src) return <img src={src} alt={alt} decoding="async" {...props} />;

  return <picture>
    <source srcSet={webpSrc} type="image/webp" />
    <img src={src} alt={alt} decoding="async" {...props} />
  </picture>;
}
