export function AnnouncementBar() {
  const announcements = [
    "Our camp is equipped with Starlink Internet",
    "We offer discount for groups",
    "We can arrange taxi for you from any city in Jordan with best prices",
    "Hot air Balloon now available with us",
  ]

  // Join announcements with a black bullet point and more spacing
  const marqueeText = announcements.join(" 　•　 ")

  return (
    <div className="py-2 overflow-hidden" style={{ backgroundColor: 'rgb(251, 191, 36)' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="text-black font-medium">{marqueeText}</span>
          <span className="text-black font-medium">{marqueeText}</span>
        </div>
      </div>
    </div>
  )
}
