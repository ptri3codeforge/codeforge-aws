import React from 'react';

export default function Message({
  message,
  isMe,
}: {
  message: any;
  isMe: boolean;
}) {
  return (
    <div>
      <p>{message.owner}</p>
      <div>
        <p>{message.message}</p>
      </div>
    </div>
  );
}
