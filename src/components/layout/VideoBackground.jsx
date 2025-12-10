// src/components/layout/VideoBackground.jsx
export const VideoBackground = ({ children, overlay = true }) => {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/90" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
