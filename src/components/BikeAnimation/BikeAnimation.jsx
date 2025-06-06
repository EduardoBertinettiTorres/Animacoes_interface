const CompleteBike = () => {
  const R_axle = { x: 100, y: 140 };
  const F_axle = { x: 200, y: 140 };
  const BB = { x: 140, y: 145 };
  const ST_conn = { x: 135, y: 95 };
  const HT_top = { x: 192.5, y: 85 };
  const HT_bottom = { x: 192.5, y: 115 };

  return (
    <div className="max-w-md mx-auto mt-2 mb-8">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 180"
        className="w-full"
      >
        <g>
          <g>
            <circle
              cx={R_axle.x}
              cy={R_axle.y}
              r="35"
              stroke="#2C3E50"
              strokeWidth="4"
              fill="#fff"
            />
            {[...Array(10)].map((_, i) => (
              <line
                key={`rear-${i}`}
                x1={R_axle.x}
                y1={R_axle.y}
                x2={R_axle.x}
                y2={R_axle.y - 35}
                stroke="#2C3E50"
                strokeWidth="1"
                transform={`rotate(${i * 36}, ${R_axle.x}, ${R_axle.y})`}
              />
            ))}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${R_axle.x} ${R_axle.y}`}
              to={`360 ${R_axle.x} ${R_axle.y}`}
              dur="2s"
              repeatCount="indefinite"
            />
          </g>
        </g>
        <g>
          <g>
            <circle
              cx={F_axle.x}
              cy={F_axle.y}
              r="35"
              stroke="#2C3E50"
              strokeWidth="4"
              fill="#fff"
            />
            {[...Array(10)].map((_, i) => (
              <line
                key={`front-${i}`}
                x1={F_axle.x}
                y1={F_axle.y}
                x2={F_axle.x}
                y2={F_axle.y - 35}
                stroke="#2C3E50"
                strokeWidth="1"
                transform={`rotate(${i * 36}, ${F_axle.x}, ${F_axle.y})`}
              />
            ))}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${F_axle.x} ${F_axle.y}`}
              to={`360 ${F_axle.x} ${F_axle.y}`}
              dur="2s"
              repeatCount="indefinite"
            />
          </g>
        </g>
        <path
          d={`M${BB.x} ${BB.y} L${R_axle.x} ${R_axle.y}`}
          stroke="#2C3E50"
          strokeWidth="5"
          fill="none"
        />
        <path
          d={`M${ST_conn.x} ${ST_conn.y} L${R_axle.x} ${R_axle.y}`}
          stroke="#2C3E50"
          strokeWidth="5"
          fill="none"
        />
        <path
          d={`M${BB.x} ${BB.y} L${ST_conn.x} ${ST_conn.y}`}
          stroke="#2C3E50"
          strokeWidth="4"
          fill="none"
        />
        <path
          d={`M${ST_conn.x} ${ST_conn.y} L${HT_top.x} ${HT_top.y}`}
          stroke="#2C3E50"
          strokeWidth="5"
          fill="none"
        />
        <path
          d={`M${BB.x} ${BB.y} L${HT_bottom.x} ${HT_bottom.y}`}
          stroke="#2C3E50"
          strokeWidth="5"
          fill="none"
        />
        <path
          d={`M${HT_bottom.x} ${HT_bottom.y} L${HT_top.x} ${HT_top.y}`}
          stroke="#2C3E50"
          strokeWidth="5"
          fill="none"
        />
        <path
          d={`M${HT_bottom.x} ${HT_bottom.y} L${F_axle.x} ${F_axle.y}`}
          stroke="#2C3E50"
          strokeWidth="5"
          fill="none"
        />
        <rect
          x={ST_conn.x - 10}
          y={ST_conn.y - 20}
          width="20"
          height="10"
          rx="5"
          fill="#2C3E50"
        />{" "}
        <rect
          x={ST_conn.x - 3}
          y={ST_conn.y - 10}
          width="6"
          height="10"
          fill="#2C3E50"
        />{" "}
        <path
          d={`M${HT_top.x} ${HT_top.y} L${HT_top.x} ${HT_top.y - 10}`} // Vertical
          stroke="#2C3E50"
          strokeWidth="4"
          fill="none"
        />
        <path
          d={`M${HT_top.x - 20} ${HT_top.y - 10} L${HT_top.x + 20} ${
            HT_top.y - 10
          }`}
          stroke="#2C3E50"
          strokeWidth="4"
          fill="none"
        />
        <circle cx={HT_top.x - 20} cy={HT_top.y - 10} r="4" fill="#2C3E50" />
        <circle cx={HT_top.x + 20} cy={HT_top.y - 10} r="4" fill="#2C3E50" />
        <g>
          <circle
            cx={BB.x}
            cy={BB.y}
            r="8"
            fill="#E74C3C"
            stroke="#2C3E50"
            strokeWidth="2"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${BB.x} ${BB.y}`}
              to={`360 ${BB.x} ${BB.y}`}
              dur="1s"
              repeatCount="indefinite"
            />
            <rect
              x={BB.x - 1}
              y={BB.y - 15}
              width="2"
              height="20"
              fill="#2C3E50"
              rx="1"
            />{" "}
            <rect
              x={BB.x - 4}
              y={BB.y - 15 - 2}
              width="8"
              height="6"
              rx="2"
              fill="#E74C3C"
            />{" "}
          </g>
        </g>
        <path
          d={`M${BB.x} ${BB.y} Q${(BB.x + R_axle.x) / 2} ${BB.y - 10} ${
            R_axle.x
          } ${R_axle.y}`}
          stroke="#2C3E50"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,3"
        />
      </svg>
    </div>
  );
};

export default CompleteBike;
