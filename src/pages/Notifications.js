import React, { useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const refresh = () => {
    setNotifications(["New Like", "New Comment"]);
  };

  return (
    <div>
      <button className="button" onClick={refresh}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {notifications.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </section>
    </div>
  );
}

export default Notifications;