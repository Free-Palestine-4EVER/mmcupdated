export function AnnouncementBar() {
  const announcements = [
    { text: "Our camp is equipped with ", highlight: "Starlink", suffix: " Internet" },
    { text: "We offer discount for groups", highlight: null, suffix: "" },
    { text: "We can arrange taxi for you from any city in Jordan with best prices", highlight: null, suffix: "" },
    { text: "Hot air Balloon now available with us", highlight: null, suffix: "" },
  ]

  const renderAnnouncement = (announcement: any) => {
    if (announcement.highlight) {
      return (
        <>
          {announcement.text}
          <span className="text-black font-bold animate-pulse">{announcement.highlight}</span>
          {announcement.suffix}
        </>
      )
    }
    return announcement.text
  }

  const AnnouncementList = () => (
    <>
      {announcements.map((ann, i) => (
        <div key={i} className="marquee-item text-white font-medium flex items-center gap-3">
          {renderAnnouncement(ann)}
          <span className="text-white/70">•</span>
        </div>
      ))}
    </>
  )

  return (
    <div className="py-2 overflow-hidden" style={{ backgroundColor: 'rgb(251, 191, 36)' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          <AnnouncementList />
          <AnnouncementList />
        </div>
      </div>
    </div>
  )
}
