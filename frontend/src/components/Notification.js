import React from "react";
import Card from "react-bootstrap/Card";

function Notification() {
  const notifications = [
    {
      id: "1",
      date: "13/12/2002",
      time: "9:21pm",
      content: "Ao 3 ph OHP vuot qua muc cho phep",
    },
    {
      id: "2",
      date: "12/12/2002",
      time: "10:21pm",
      content: "Ao 4 ph OHP vuot qua muc cho phep",
    },
    {
      id: "3",
      date: "13/12/2002",
      time: "1:21pm",
      content: "Ao 5 ph OHP vuot qua muc cho phep",
    },
    {
        id: "4",
        date: "9/12/2002",
        time: "12:21pm",
        content: "Ao 1 nhiet do qua cao",
      },
  ];

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Notifications</h3>
      {notifications.map((n) => {
        return (
          <Card className="" key={n.id} style={{ marginBottom: "6px" }}>
            <Card.Header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              {n.date}
              <Card.Text className="" style={{ fontSize: "12px" }}>
                {n.time}
              </Card.Text>
            </Card.Header>
            <Card.Body style={{}}>  
              <Card.Text>{n.content}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Notification;
