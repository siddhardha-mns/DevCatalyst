import React from 'react';

export function OptimizedImage({ src, alt, loading = 'lazy', decoding = 'async', className = '', ...rest }) {
  const make = (ext) => src.replace(/\.(jpg|jpeg|png)$/i, `-opt.${ext}`);
  const avif = make('avif');
  const webp = make('webp');
  return (
    <picture>
      <source type="image/avif" srcSet={avif} />
      <source type="image/webp" srcSet={webp} />
      <img src={src} alt={alt} loading={loading} decoding={decoding} className={className} {...rest} />
    </picture>
  );
}
