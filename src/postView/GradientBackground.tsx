export default function GradientBackground() {
  return (
    <div
      style={{
        background:
          'linear-gradient(143.6deg, rgba(192, 132, 252, 0) , rgba(165, 111, 245, 0.144) 40.92%, rgba(204, 171, 238, 0) )',
        filter: 'blur(20px)', // Assuming blur-lg translates to a 8px blur
        position: 'absolute',
        inset: '0', // This sets all four sides to 0
        maxWidth: '70vw', // max-w-screen translates to 100vw
        marginInline: 'auto',
        zIndex: '-10', // -z-10 translates to a z-index of -10
      }}
    />
  );
}
