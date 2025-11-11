export function AnnouncementBar() {
  const announcements = [
    { text: "Our camp is equipped with ", highlight: "Starlink", suffix: " Internet" },
    { text: "We offer discount for groups", highlight: null, suffix: "" },
    { text: "We can arrange taxi for you from any city in Jordan with best prices", highlight: null, suffix: "" },
    { text: "Hot air Balloon now available with us", highlight: null, suffix: "" },
  ]

  const renderAnnouncement = (announcement: any, key: number) => {
    if (announcement.highlight) {
      return (
        <span key={key}>
          {announcement.text}
          <span className="text-black font-bold animate-pulse">{announcement.highlight}</span>
          {announcement.suffix}
        </span>
      )
    }
    return <span key={key}>{announcement.text}</span>
  }

  return (
    <div className="py-2 overflow-hidden" style={{ backgroundColor: 'rgb(251, 191, 36)' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="text-white font-medium">
            {announcements.map((ann, i) => (
              <span key={i}>
                {renderAnnouncement(ann, i)}
                {i < announcements.length - 1 && " • "}
              </span>
            ))}
          </span>
          <span className="text-white font-medium">
            {announcements.map((ann, i) => (
              <span key={`dup-${i}`}>
                {renderAnnouncement(ann, i)}
                {i < announcements.length - 1 && " • "}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
