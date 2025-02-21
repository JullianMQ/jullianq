const Background = () => {
  return (
    <video className="bg-video" autoPlay muted loop playsInline>
      <source src="/background-vid-mobile.webm" type="video/webm"></source>
      Your browser does not support the video tag.
    </video>
  )
}

export default Background
