export default function OptimizedImage({ src, alt, ...props }) {
  return <img src={src} alt={alt} decoding="async" {...props} />;
}
