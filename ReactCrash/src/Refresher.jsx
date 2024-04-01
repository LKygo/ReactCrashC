import React from "react";

const user = "Kingpin";
const tools = [
  {
    id: 0,
    name: "React",
    purpose: "Web dev",
  },
  {
    id: 1,
    name: "Next",
    purpose: "Web dev",
  },
  {
    id: 2,
    name: "Jetpack",
    purpose: "Android dev",
  },
  {
    id: 3,
    name: "Svely",
    purpose: "Web dev",
  },
];

function App() {
  return (
    <div>
      <div className="fontClassG">LKygo</div>
      <p
        style={{
          fontWeight: 900,
          fontSize: 75,
          color: "blue",
        }}
      >
        Hey {user}
      </p>
      {/* List of tech */}

      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            <p style={{ color: "blue", fontSize: 18 }}>{tool.name}</p>
            <p
              style={{
                color: tool.purpose === "Android dev" ? "green" : "black",
              }}
            >
              {tool.purpose}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
