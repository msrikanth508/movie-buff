import React from 'react';

export default function YouTubeEmbed(props) {
  const aspectRatio = `56.25%`;

  return (
    <div
      style={{
        position: `relative`,
        paddingBottom: aspectRatio,
        width: `100%`,
        height: 0,
      }}
      {...props}
    >
      <iframe
        title={props.title}
        src={`https://www.youtube.com/embed/${props.id}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
        }}
      />
    </div>
  );
}
