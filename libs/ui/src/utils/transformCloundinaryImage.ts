export const transformCloundinaryImage = (imageUrl: string, targetWidth: number): string => {
  if (!imageUrl.includes('/upload/')) {
    return imageUrl
  }
  return imageUrl.split('/upload/').join(`/upload/c_scale,w_${targetWidth}/`)
}